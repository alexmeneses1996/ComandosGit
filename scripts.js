let nombre = "JOSE"
let edad = 28

console.log(nombre)
alert("Hola es una prueba")


//let articulo = prompt("ingresa el precio del articulo: ")
//let descuento = 0.15
//let precioTotal = (1- descuento)*articulo
let nota = parseInt(prompt("Ingrese el valor de la nota: "))

if (nota>4){
    alert("El estudiante esta super aprobado!")
}   else if (nota>3){
    alert("El estudianta aprobo")
}


nota > 3 ? alert("el estudiante esta aprobado") : alert("El estudiante esta reprobado")

switch (nota) {
    case 2:
        alert("casi pasas")
        break;
    case 3:
        alert("Pasaste raspado")
        break;
    case 4:
        alert("Pasaste super bien")
        break;
    case 5:
        alert("Eres excepcional")
        break;

    default:
        break;
}

let contenedor1 = document.getElementById('div1');

let contenedor2 = document.getElementsByClassName('contenedor')[0];
console.log(contenedor2);
