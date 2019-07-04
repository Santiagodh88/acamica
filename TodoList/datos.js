class Datos {

    constructor() {
        //Defino las Propiedades
        this.id = 1;
        this.array = [];
    }

    //Defino los metodos.
    crearItem(item) {
        item.id = this.id++;
        this.array.push(item);
        console.log("Agregado");
        console.log(item.id)
        return item;
    }

    eliminarItem(id) {
        /* this.array.forEach(function(elemento, indice, array) {
             console.log(elemento.id);
             if (elemento.id === id) {
                 array.splice(indice, 1);
                 // así es como se eliminan elementos, n define la cantidad de elementos a eliminar,
                 // de esa posicion(pos) en adelante hasta el final del array.
             }
         });
         */

        ///La funcion filter filtra todos los elementos del array y genera un nuevo array con todos los elementos que pasaron la 
        //prueba. Se los asigno de nuevo al array

        this.array = this.array.filter(x => x.id != id);
    }

    modificarItem(id) {
        //NOTA: Nunca moverse por los indices de los array, cuando se borran se trula todo. Hay que hacerlo con un forEach
        this.array.forEach(element => {
            if (element.id === id) {
                element.hecho = !element.hecho;
            }
        });
    }



}