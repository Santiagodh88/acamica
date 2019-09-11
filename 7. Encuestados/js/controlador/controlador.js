/*
 * Controlador
 */
var Controlador = function(modelo) {
    this.modelo = modelo;
};

Controlador.prototype = {
    agregarPregunta: function(pregunta, respuestas) {
        this.modelo.agregarPregunta(pregunta, respuestas);
    },

    borrarPregunta: function(id) {
        if (id != 0) {
            this.modelo.borrarPregunta(id);
        }
    },

    borrarTodo: function() {
        this.modelo.borrarTodo();
    },
    editarPregunta: function(id) {
        this.modelo.editarPregunta(id);
    },
};

//AGREGAR TODAS LAS VALIDACIONES ACA