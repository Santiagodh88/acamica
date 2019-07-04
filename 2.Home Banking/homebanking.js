//Declaración de variables
var nombreUsuario = "Santiago";
var saldoCuenta = 1000;
var limiteExtraccion = 500;

var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt("Ingrese el nuevo límite de extracción: "));
    if (!isNaN(nuevoLimite)) {
        limiteExtraccion = nuevoLimite;
        alert("Has cambiado el límite de extraccion a $" + limiteExtraccion);
        actualizarLimiteEnPantalla();
    } else {
        alert("Ingresó un numero inválido");
    }
}

function extraerDinero() {
    var saldoAnt = saldoCuenta;
    var dinero = parseInt(prompt("Ingrese la cantidad de dinero a extraer: "));
    if (!isNaN(dinero)) {
        if (dinero <= saldoCuenta) {
            if (dinero <= limiteExtraccion) {
                if ((dinero % 100) == 0) {
                    restaDinero(dinero);
                    actualizarSaldoEnPantalla();
                    alert("Has extraido: $" + dinero + "\nSaldo Anterior: $" + saldoAnt + "\nSaldo Actual: $" + saldoCuenta);
                } else {
                    alert("El importe a extraer deber ser solo con billetes de $100");
                }
            } else {
                alert("El importe a extraer es mayor al límite permitido de extracción: $" + limiteExtraccion);
            }
        } else {
            alert("El importe a extraer es mayor al importe disponible en la cuenta: $" + saldoCuenta);
        }
    } else {
        alert("Ingresó un número inválido");
    }

}

function depositarDinero() {
    var saldoAnt = saldoCuenta;
    var dinero = parseInt(prompt("Ingrese la cantidad de dinero a depositar: "));
    if (!isNaN(dinero)) {
        sumaDinero(dinero);
        actualizarSaldoEnPantalla();
        alert("Has depositado: $" + dinero + "\nSaldo Anterior: $" + saldoAnt + "\nSaldo Actual: $" + saldoCuenta);
    } else {
        alert("Ingresó un número inválido");
    }
}

function pagarServicio() {
    var opcion = parseInt(prompt("Ingrese el nro que corresponda con el servicio que queres pagar: \n1. Agua \n2. Luz  \n3. Internet  \n4. Telefono"));
    if (!isNaN(opcion)) {
        switch (opcion) {
            case 1:
                pagar(agua);
                break;
            case 2:
                pagar(telefono);
                break;
            case 3:
                pagar(luz);
                break;
            case 4:
                pagar(internet);
                break;
            default:
                alert("La opción seleccionada no es válida");
        }
    } else {
        alert("Ingresó un número inválido");
    }
}

function pagar(serv) {
    if (serv <= saldoCuenta) {
        var saldoAnt = parseInt (saldoCuenta);
        restaDinero(serv);
        actualizarSaldoEnPantalla();
        alert ("Se ha pagado el servicio correctamente: " 
            + "\n Saldo anterior: $" + saldoAnt 
            + "\n Dinero descontado: $" + serv
            + "\n Saldo actual: $" + saldoCuenta);
        return true;
    } else {
        alert("No dispone de dinero para pagar el servicio.")
    }   
    return false;
}


function transferirDinero() {

}

function iniciarSesion() {

}


function sumaDinero(dinero) {
    saldoCuenta += dinero;
}

function restaDinero(dinero) {
    saldoCuenta -= dinero;
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}