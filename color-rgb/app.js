//seleccionamos los inputs
const inputRojo = document.getElementById('rojo')
const inputVerde = document.getElementById('verde')
const inputAzul = document.getElementById('azul')

//seleccionamos los labels
const textoRojo = document.getElementById('texto-rojo')
const textoVerde = document.getElementById('texto-verde')
const textoAzul = document.getElementById('texto-azul')

//seleccionamos el valor de los inputs
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//le damos texto los p
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo},${verde},${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

//Actualiza RED (ROJO)
inputRojo.addEventListener('change', (e)=>{
    let rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo,verde,azul);
})
//Actualiza VERDE (VERDE)
inputVerde.addEventListener('change', (e)=>{
    let verde = inputVerde.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo,verde,azul);
})
//Actualiza AZUL (AZUL)
inputAzul.addEventListener('change', (e)=>{
    let azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo,verde,azul);
})