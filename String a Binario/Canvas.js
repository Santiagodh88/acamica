/* 1. Desarrollar una función que retorne el equivalente binario de 
      una cadena de caracteres pasada por parámetro, por ejemplo: */

//let cadenaCaracteres = 'AB';
//let cadenaBinaria = convertirStringABinario(cadenaCaracteres);

//console.log(cadenaBinaria); // el  resultado es “0100000101000010”

/*La representación de cada caracter viene dada por un valor decimal, 
estos valores los podemos conseguir en la tabla de caracteres assci
https://ascii.cl/, estos valores decimales se convierten a números 
binarios de 8 bits (byte) por ejemplo 01000001 es el byte que representa
la letra "A", 01000010 representa la letra "B", entre otros. 
*/

document.getElementById("convertToBinary").addEventListener("click", function(e) {
    let cadena = document.getElementById("char").value;
    let resultado = convertirStringABinario(cadena);
    document.getElementById("bin").value = resultado;
});

document.getElementById("convertToString").addEventListener("click", function(e) {
    let cadena = document.getElementById("bin").value;
    let resultado = convertirBinarioAString(cadena);
    document.getElementById("char").value = resultado;
});

document.getElementById("input1").addEventListener("input", inputFile);



function convertirStringABinario(cadenaC) {
    let stringBinario = "";
    for (let i = 0; i < cadenaC.length; i++) {
        stringBinario += cadenaC[i].charCodeAt().toString(2).padStart(8, "0");
    }
    return stringBinario;

}

function convertirBinarioAString(cadenaC) {
    cadenaC = cadenaC.match(/.{1,8}/g).join(" ");
    var newBinary = cadenaC.split(" ");
    var binaryCode = [];
    for (i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    return binaryCode.join("");

}

function inputFile(e) {
    var reader = new FileReader();
    reader.onload = function() {
        console.log("Cargando...");
        var myImage = new Image();
        myImage.onload = function() {
            console.log("Canvas handler");
            var canvas = document.getElementById("output");
            var width = myImage.width;
            var height = myImage.height;
            console.log("width: " + width + " heigh: " + height);
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(myImage, 0, 0);
        }

        myImage.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);

}


//get image data deberia traerme la data 
// hacer operaciones binarias y recordar el lenght antes





/* 2. Desarrollar una función que retorne una cadena de caracteres de 
      una cadena binaria pasada por parámetro, por ejemplo: */

// let otraCadena = convertirBinarioAString(cadenaBinaria);

// console.log(otraCadena); // El resultado es "AB"

// function convertirBinarioAString() {
//     let output = [];
// }

/*Es decir, realiza el proceso inverso a la funcion anterior */