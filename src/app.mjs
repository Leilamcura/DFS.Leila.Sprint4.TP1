// Centraliza la configuracion de la app conectado a MongoDB y cargando las 
// rutas necesarioas, inicia el servidor

import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import path from 'path'; // Modulo para manejar rutas de archivos
import { fileURLToPath } from 'url'; // Obtiene la ruta del archivo actual
import methodOverride from 'method-override'; //Permite usar PUT y DELETE en formularios
import expressLayouts from 'express-ejs-layouts'; // Middleware para Layouts EJS

// Simular __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware para usar put y delete
app.use(methodOverride('_method'));

// Middleware para servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static('public'));

// Middleware para parsear cuerpos de solicitudes con formularios
app.use(express.urlencoded({ extended: true }));

//Middleware para parsear JSON
app.use(express.json());

// Conexion mongodb
connectDB();

// // Motor de vistas EJS
// app.set('view engine', 'ejs');
// app.set('views', path.resolve('./views'));

// //Configurar express-ejs-layouts
// app.use(expressLayouts);
// app.set('layout', 'layout'); // archivo base de layout

// Configuración de EJS y layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout'); // usa views/layout.ejs

// Rutas HTML normales
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Página Principal'
    });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'Acerca de' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contacto' });
});


//configuracion de rutas
app.use('/api', superHeroRoutes);

//Manejo de errores para rutas no encontradas
app.use((req, res) => {
    res.status(404).send({ mensaje: 'Ruta no encontrada'});
});



// // Iniciar el servidor
// app.listen(PORT, () => {
//     console.log(`Servidor escuchado en el puerto ${PORT}`);
// });

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchado en el puerto ${PORT}`);
  // console.log(`Servidor corriendo en http://localhost:${PORT}`);
});