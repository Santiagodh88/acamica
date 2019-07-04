//Declaración de variables
var nombreUsuario = "Santiago";
var saldoCuenta = 1000;
var limiteExtraccion = 500;

var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

var cuentaAmiga =  ["1234567", "7654321"];

var codigoDeSeguridad = "1234";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion ();
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
        alert("No dispone de dinero para pagar el servicio.");
    }   
    return false;
}


function transferirDinero() {
    var monto = parseInt (prompt ("Ingrese el monto que desee transferir:"));
    if (!isNaN(monto)) {
        if (monto <= saldoCuenta) {
            var cuentaAux = prompt ("Ingrese el nro de cuenta a la que desea transferir: ");
            if (cuentaAmiga.includes(cuentaAux)){
                restaDinero(monto);
                actualizarSaldoEnPantalla ();
                alert ("Se han transferido: $" + monto +
                "\nCuenta destino: " + cuentaAux);

            } else {
                alert ("No se encontro el número de cuenta dentro de las cuentas amigas.");
            }
        } else {
            alert("El importe a transeferir es mayor al importe disponible en la cuenta: $" + saldoCuenta);
        }
    } else {
        alert("Ingresó un número inválido");
    }
}

function iniciarSesion() {
   var codAux = parseInt (prompt ("Ingrese el código de su cuenta: "));
   if (codigoDeSeguridad == codAux){
       alert ("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones.");
   } else {
       alert ("Código incorrecto: Tu dinero ha sido retenido por cuestiones de seguridad.");
       saldoCuenta = 0;
       limiteExtraccion = 0;
       actualizarLimiteEnPantalla ();
       actualizarSaldoEnPantalla ();
   }
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