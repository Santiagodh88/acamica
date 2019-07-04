var nombreColores = ['White', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
    'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
    'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
    'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
    'LightGreen', 'PaleGreen', 'PaleTurquoise',
    'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
    'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
document.getElementById('indicador-de-color').addEventListener('click', seleccionarColor);
var color;

colorPersonalizado.addEventListener('change',
    (function() {
        // Se guarda el color de la rueda en colorActual
        colorActual = colorPersonalizado.value;
        // Completar para que cambie el indicador-de-color al colorActual
        document.getElementById('color-personalizado').style.backgroundColor = colorActual;
    })
);

function crearPaletaDinamica() {
    nombreColores.forEach(function(element) {
        var newDiv = document.createElement('div');
        newDiv.className = 'color-paleta';
        newDiv.style = 'background-color:' + element;
        var currentDiv = document.getElementById("paleta");
        currentDiv.appendChild(newDiv);
    });

}

function crearGrillaPixeles() {
    for (let i = 0; i <= 1750; i++) {
        var newDiv = document.createElement('div');
        var currentDiv = document.getElementById("grilla-pixeles");
        currentDiv.appendChild(newDiv);
    }
}

paleta.addEventListener('click', seleccionarColor);

function seleccionarColor(e) {
    color = e.target.style.backgroundColor;
    document.getElementById('indicador-de-color').style.backgroundColor = color;
}

//Pintar//
var cuadro = document.getElementById('grilla-pixeles');
cuadro.addEventListener('click', pintar);

function pintar(e) {
    e.target.style.backgroundColor = color;
}

/////
function inicio() {
    crearPaletaDinamica();
    crearGrillaPixeles();
}


///Pintar manteniendo el mouse
var estaPresionado;
cuadro.addEventListener("mousedown", function(e) {
    estaPresionado = true;
    //console.log('Mouse down');

});

///Agregar un mouse out 
cuadro.addEventListener("mouseup", function(e) {
    estaPresionado = false;
    //console.log('Mouse up');
});

cuadro.addEventListener("mouseover", function(e) {
    //console.log('Mouse over');
    pintarContinuo(e);

});

function pintarContinuo(e) {
    if (estaPresionado)
        e.target.style.backgroundColor = color;
}

///// BORRAR TODO////

$("#borrar").click(function() {
    var $pixelBorrado = $("#grilla-pixeles div").animate({ "background-color": "#ffffff" }, 2000);
});

/////

/// cargar superHeroes ////
$("#batman").click(function() {
    cargarSuperheroe(batman);
});

$("#wonder").click(function() {
    cargarSuperheroe(wonder);
});

$("#flash").click(function() {
    cargarSuperheroe(flash);
});

$("#invisible").click(function() {
    cargarSuperheroe(invisible);
});

/////guardar archivo ////

$("#guardar").click(function() {
    guardarPixelArt();
});

inicio();