class Pelicula {
    constructor (id, nombre, horario, precio, disponibilidad){
        this.id = id;
        this.nombre = nombre;
        this.horario = horario;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
    }
}
/*
function buscarPelicula(peliculas) {
    let nombrePelicula = prompt("Ingrese un nombre de pelicula");

    let peliculaBuscada = peliculas.find(pelicula => pelicula.nombre == nombrePelicula);

    if(peliculaBuscada == undefined) {
        console.log("Pelicula no encontrada")
    } else {
        console.log(peliculaBuscada)
    }
}

function buscarHorario(peliculas) {
    let horario = parseFloat(prompt("Ingrese un horario"));
    let horarioBuscados = peliculas.find(pelicula => pelicula.horario == horario);

    if(horarioBuscados == undefined) {
        console.log("No hay coincidencias de horario");
    } else {
        console.log(horarioBuscados);
    }
} 
*/
const pelicula1 = new Pelicula(1,"Thor", 21, 800, 180);
const pelicula2 = new Pelicula(2,"Minions", 18, 600, 275);
const pelicula3 = new Pelicula(3,"Elvis", 22, 700, 211);
const pelicula4 = new Pelicula(4,"Top Gun", 17, 500, 219);

const peliculas = [pelicula1, pelicula2, pelicula3, pelicula4];

/*
do {
    respuesta = parseInt(prompt(`Ingrese numero para:
        1- Buscar una pelicula
        2- Buscar pelicula por horario
    `))
} while(respuesta <1 || respuesta >2)


switch(respuesta) {
    case 1:
        buscarPelicula(peliculas)
        break
    case 2:
        buscarHorario(peliculas)
        break
    default:
        alert("Opcion no valida")
        break
}
*/
const divPeliculas = document.getElementById ("peliculas")

peliculas.forEach(pelicula => {
    divPeliculas.innerHTML += `
    <div class="card peliculas" id="peliculas${pelicula.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"> Pelicula: ${pelicula.nombre}</h5>
                <p class="card-text"> Horario: ${pelicula.horario} hrs </p>
                <p class="card-text"> Precio: ${pelicula.precio}</p>
                <p class="card-text"> Disponibilidad: ${pelicula.disponibilidad}</p>
        </div>
        </div>   
    ` 
})
