// IRepository Interfaz que define métodos CRUD estandar

class IRepository {
    obtenerPorId(id){
        throw new Error ("Método 'obtenerPorId()' no implementado");
    }
    obtenerTodos(){
        throw new Error ("Método 'obtenerTodos()' no implementado");
    }
    buscarPorAtributo(atributo, valor) {
        throw new Error ("Método 'buscarPorAtributo()' no implementado");
    }
   
    crearSuperheroe() {
        throw new Error("Método 'crearSuperheroe()' no implementado");
    }
    editarSuperheroe() {
        throw new Error("Método 'editarSuperheroe()' no implementado");
    }
    eliminarPorId() {
         throw new Error("Método 'eliminarPorId()' no implementado");
    }

}

export default IRepository;