var expect = chai.expect;

//reservarHorario(horario)
describe('Cuando se reserva un horario de un restaurant', function() {
    it('elimina el horario correspondiente del arreglo.', function() {
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["10:00", "11:00", "12:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        restaurant.reservarHorario("10:00");
        expect(restaurant.horarios).eql(["11:00", "12:00"]);
    })
    it('el arreglo se mantiene igual si no posee tal horario.', function() {
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["10:00", "11:00", "12:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        restaurant.reservarHorario("10:10");
        expect(restaurant.horarios).eql(["10:00", "11:00", "12:00"]);
    })
    it('el arreglo se mantiene igual si no se le pasa ningún parámetro a la función', function() {
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["10:00", "11:00", "12:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        restaurant.reservarHorario();
        expect(restaurant.horarios).eql(["10:00", "11:00", "12:00"]);
    })

})

//obtenerPuntuacion()
describe('Dado un restaurant con determinadas calificaciones', function() {
    it('La puntuación (que es el promedio de ellas) se calcula correctamente', function() {
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["10:00", "11:00", "12:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        expect(restaurant.obtenerPuntuacion()).eql(7.4);
    })

    it('La puntuación es igual a 0, si no tiene calificaciones', function() {
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["10:00", "11:00", "12:00"], "../img/asiatica1.jpg", []);
        expect(restaurant.obtenerPuntuacion()).eql(0);

    })
})

//calificar ()
describe('Dado un restaurant al calificarlo', function() {
    it('la calificacion se agrega al array', function() {
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["10:00", "11:00", "12:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        restaurant.calificar(1);
        expect(restaurant.calificaciones).eql([6, 7, 9, 10, 5, 1]);
    })

    it('la calificacion no se agrega al array si no es numerica', function() {
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["10:00", "11:00", "12:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        restaurant.calificar("1");
        expect(restaurant.calificaciones).eql([6, 7, 9, 10, 5]);
    })
    it('la calificacion no se agrega al array si es nula', function() {
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["10:00", "11:00", "12:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        restaurant.calificar();
        expect(restaurant.calificaciones).eql([6, 7, 9, 10, 5]);
    })
    it('la calificacion no se agrega al array si es menor a cero', function() {
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["10:00", "11:00", "12:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        restaurant.calificar(-1);
        expect(restaurant.calificaciones).eql([6, 7, 9, 10, 5]);
    })
    it('la calificacion no se agrega al array si es mayor a 10', function() {
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["10:00", "11:00", "12:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        restaurant.calificar(11);
        expect(restaurant.calificaciones).eql([6, 7, 9, 10, 5]);
    })
    it('la calificacion no se agrega al array si no es entera', function() {
        let restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["10:00", "11:00", "12:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        restaurant.calificar(9.5);
        expect(restaurant.calificaciones).eql([6, 7, 9, 10, 5]);
    })
})

//obtenerRestaurantes()
describe('Dado un listado de Restaurantes', function() {
    it('El filtro por Rubro rotorna la cantidad correcta de restaurantes', function() {
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7]),
            new Restaurant(5, "Jolly", "Asiática", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7])
        ];
        var listado = new Listado(listadoDeRestaurantes)
        expect(listado.obtenerRestaurantes("Asiática", null, null).length).eql(3);
    })

    it('El filtro por Ubicacion rotorna la cantidad correcta de restaurantes', function() {
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7]),
            new Restaurant(5, "Jolly", "Asiática", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7])
        ];
        var listado = new Listado(listadoDeRestaurantes)
        expect(listado.obtenerRestaurantes(null, "Berlín", null).length).eql(2);
    })

    it('El filtro por Horario rotorna la cantidad correcta de restaurantes', function() {
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7]),
            new Restaurant(5, "Jolly", "Asiática", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7])
        ];
        var listado = new Listado(listadoDeRestaurantes)
        expect(listado.obtenerRestaurantes(null, null, "12:00").length).eql(3);
    })

})