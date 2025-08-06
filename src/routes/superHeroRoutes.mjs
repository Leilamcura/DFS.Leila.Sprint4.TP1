// Define los endpoints y mapea cada uno a su respectivo controlador
// Define las rutas necesarias para cada operación del controlador

import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    editarSuperheroeController,
    eliminarSuperheroePorIdController,
    agregarSuperheroeController,
    formActualizarHeroeController,
} from '../controllers/superheroesController.mjs';

// Para cumplir con los requerimientos del Sprint3 TP2 validar y sanitizar
import { heroesValidationRules } from "../middlewares/validationRules.mjs";
import { heroesHandleValidationErrors } from "../middlewares/errorMiddleware.mjs";

const router = express.Router();

router.get('/heroes/:id', obtenerSuperheroePorIdController); 
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);  
router.get('/heroes', obtenerTodosLosSuperheroesController);


// Agregado de requerimiento Sprint3 TP3: Definir una ruta POST /heroes/agregar en superheroesRoutes.mjs.
router.post('/heroes/agregar', heroesValidationRules(), heroesHandleValidationErrors, agregarSuperheroeController)

// Agregar una ruta PUT /heroes/:id/editar en superheroesRoutes.mjs
router.get('/formEditarHeroe/:id', formActualizarHeroeController); //busca y carga los datos en el form
router.put('/heroes/actualizar/:id', heroesValidationRules(), heroesHandleValidationErrors, editarSuperheroeController);

// Agregado de requerimiento Sprint3 TP3: Formularios
// Agregar Heroe
router.get('/formAgregarHeroe', (req, res) => {
    res.render('addSuperheroe', { title: 'Agregar Superheroe' }); 
});

router.delete('/heroes/eliminar/:id', eliminarSuperheroePorIdController);

export default router;


