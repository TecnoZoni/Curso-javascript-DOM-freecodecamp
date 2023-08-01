const boton = document.getElementById("boton-color");
const color = document.getElementById("color");

function generarColorHexAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random()*16);
        //Escribiendo digitos[indiceAleatorio] nos va a tomar el caracter del string que tenga el mismo indice
        colorHex += digitos[indiceAleatorio];
    }
    
    return colorHex;
}

boton.addEventListener('click', function () {
    let colorAleatorio = generarColorHexAleatorio();
    color.textContent = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;
})