// const Queso = document.getElementById('queso');
// const Huevo = document.getElementById('huevo');
// const enlace = document.getElementsByTagName('a');
// const primerTopping = document.querySelector('.topping')

// // modificar texto
// Queso.innerText += "🧀";
// Huevo.innerText += "🥚";

// // agregar estilos
// Huevo.style.color='red';

// // quitar atributos
// enlace[0].removeAttribute('href')

// // agregar atributos
// console.log(enlace[0].setAttribute('href','https://www.freecodecamp.org/'));

// //eliminar clases
// primerTopping.classList.remove('topping');

// //agregar clases
// primerTopping.classList.add('topping');

// //ver lista de clases
// console.log(primerTopping.classList);

// //verificar clases
// console.log(primerTopping.classList.contains('fondo-marron'));

// //CREAR ELEMENTOS

// //elegimos el padre para agregar el nodo
// const listaDeToppings = document.getElementById('lista-toppings');

// //elegimos que etiqueta tendra el nodo
// const toppingNuevo = document.createElement('li');

// //propiedades para el nodo
// toppingNuevo.innerText = "Paleta";
// toppingNuevo.classList.add('topping', 'fondo-marron');
// toppingNuevo.setAttribute("onclick","mostrarClicHTML('Paleta')");

// //agregamos el nodo al elemento padre
// listaDeToppings.append(toppingNuevo);

// // remover elemento 
// toppingNuevo.remove();

// //agrega un nodo como hijo
// listaDeToppings.appendChild(toppingNuevo);

// //obetener los elementos padres (parentElement)/(parentNode)
// console.log(listaDeToppings.parentElement);

// //obetener los elementos hijos (children)/(firstChild)/(children[0])
// console.log(listaDeToppings.children[0]);

// console.log(listaDeToppings.lastElementChild);

// // obtener el elemento hermano(previos/next)
// console.log(listaDeToppings.previousElementSibling)

// console.log(listaDeToppings.previousSibling)

// //EVENTOS

// //HTML
// function mostrarClicHTML(topping){
//     console.log(topping);
// }

// //javascript
// function mostrarClicJS(e){
//     console.log(e.target.innerText);
// }
// const oregano = document.getElementById('oregano');
// oregano.addEventListener('click',mostrarClicJS);

//javascript for everywhere
const toppingS = document.getElementsByClassName('topping');

function mostrarClick(e){
    console.log(e.target.innerText);
}

for( const topping of toppingS){
    topping.addEventListener('click',mostrarClick)
}