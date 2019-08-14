class Vista {
    constructor() {
        this.adjuntarEventos();
    }

    adjuntarEventos(e) {
        $(".box").click((e) => {
            this.seleccionarCuadricula(e.target.getAttribute("id"));
            console.log(e.target.getAttribute("id"))
        })
    }


    seleccionarCuadricula(e) {


    }

    nuevoJuego() {
        this.juego = new Juego();
        this.limpiarVista();
    }

    limpiarVista() {

    }
}