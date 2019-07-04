/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion /*, parametro/s extra de ZombieConductor*/ ) {
    /* Completar constructor a partir de Enemigo - Completado */
    Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
    /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
    this.direccion = direccion;


}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

ZombieConductor.prototype.mover = function() {

    /* Los movimientos estan basados en un numero aleatorio
       La direccion horizontal es siempre la misma y va ondulando verticalmente.
       Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
    if (this.direccion == 'h') {
        this.x += this.velocidad;
    } else {
        this.y += this.velocidad;
    }


    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
        this.velocidad *= -1;
    }
    //Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
    if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
        this.velocidad *= -1;
    }


}

/* Completar creacion del ZombieConductor */

/* Completar metodos para el movimiento y el ataque */

ZombieConductor.prototype.atacar = function(jugador) {
    jugador.perderVidas(5);
}