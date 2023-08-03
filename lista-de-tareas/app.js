const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

function agregarTarea() {
    if (input.value) {
        // creamos el contenedor de la tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        // creamos el texto que se guardara en la tarea
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        // creamos el contenedor de los iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        // icono completar
        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click',completarTarea);

        // icono eliminar
        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click',eliminarTarea);

        // agregamos los iconos al contenedor
        iconos.append(completar, eliminar);

        // agregamos la tarea a la lista
        listaDeTareas.appendChild(tareaNueva);

        input.value = " ";

    } else {
        alert('Por favor ingresa una tarea');
    }
}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener('click', agregarTarea);

input.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        agregarTarea();
        input.value = " ";
    }
})