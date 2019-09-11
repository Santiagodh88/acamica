/*
 * Modelo
 */
var Modelo = function() {
    this.preguntas = [];
    this.ultimoId = 0;

    //inicializacion de eventos
    this.preguntaAgregada = new Evento(this);
    this.preguntaBorrada = new Evento(this);
    this.preguntaEditada = new Event(this);
};

Modelo.prototype = {
    //se obtiene el id más grande asignado a una pregunta
    obtenerUltimoId: function() {
        // Version 1:
        // this.ultimoId = this.preguntas.reduce((prev, curr) => {
        //     /*   if (prev > curr.id) {
        //            return prev;
        //        } else {
        //            return curr.id;
        //        }*/

        //     //Version 2: return prev > curr.id ? prev : curr.id;


        // }, 0)
        // 
        this.ultimoId = this.preguntas.reduce((prev, curr) => prev > curr.id ? prev : curr.id, 0)
        return this.ultimoId;
    },

    //se agrega una pregunta dado un nombre y sus respuestas
    agregarPregunta: function(nombre, respuestas) {
        var id = this.obtenerUltimoId();
        id++;
        var nuevaPregunta = { 'textoPregunta': nombre, 'id': id, 'cantidadPorRespuesta': respuestas };
        this.preguntas.push(nuevaPregunta);
        this.guardar();
        console.log(this.preguntas)
        this.preguntaAgregada.notificar();
    },

    //se guardan las preguntas
    guardar: function() {},

    borrarPregunta: function(id) {
        this.preguntas = this.preguntas.filter(x => x.id != id)
        this.preguntaBorrada.notificar();
    },

    borrarTodo: function() {
        this.preguntas = [];
        this.preguntaBorrada.notificar();
    },

    editarPregunta: function(id) {
        for (i = 0; i < this.preguntas.length; i++) {
            if (this.preguntas[i].id === id) {
                this.preguntaEditada.notificar();

            }
        }
        return false;
    },
};