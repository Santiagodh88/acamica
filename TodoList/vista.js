class Vista {
    constructor(negocio) {
        this.negocio = negocio;
        //Creo el evento para el boton de crear tarea
        $("#creaTarea").click((e) => {
            this.crearTarea(e);
        })
    }

    crearTarea(e) {
        let input = document.getElementById("texto");
        let textnode = document.createTextNode(input.value);
        let item = negocio.crear(input.value);
        document.getElementById("texto").value = "";

        //Si al $ le paso un HTML me crea el elemento
        let li = $(`<li data-id =${item.id}> <input type= "checkbox"/>${item.tarea} <button>X</button></li>`);

        //Como no tiene HTML, la funcion busca y agrego el elemento creado antes
        $("#listaDeTareas").append(li);

        //Le agrego con jquery el evento al boton de elminar creado
        li.children('button').click((e) => {
            this.eliminarTarea(item.id);
        })

        li.children('input').click((e) => {
            this.chequearODeschequear(item.id);
        })

    }

    eliminarTarea(id) {
        negocio.eliminar(id);
        $(`li[data-id= "${id}"]`).remove();
    }

    chequearODeschequear(id) {
        negocio.marcarComoHecho(id);
    }

};