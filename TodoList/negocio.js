class Negocio {

    constructor(datos) {
        this.datos = datos;
    }

    marcarComoHecho(id) {
        this.datos.modificarItem(id);
    }

    eliminar(id) {
        return this.datos.eliminarItem(id);
    }

    crear(nombre) {
        //Creo el elemento item y lo mando al back end de datos.
        let todoItem = new TodoItem(nombre);
        return datos.crearItem(todoItem);

    }
}