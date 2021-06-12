
let seteoTiempo= 0;

let segundosTotal = seteoTiempo * 60; 

const formulario = document.querySelector('#formulario');

const input = document.querySelector('input');

const temporizador = document.getElementById("temporizador");

formulario.addEventListener('submit', validarFormulario);
input.addEventListener('input',renderizaSeteo);


function validarFormulario(e){
    
    e.preventDefault();
    if(e.target[0].value ===''){
        alert('Por favor, ingresa un número')
    }else{

        seteoTiempo=e.target[0].value;
        segundosTotal = seteoTiempo * 60; 
        setInterval(realizarConteo, 1000);
    }

}

function renderizaSeteo(e){
    if(e.target.value === ''){
        console.log('El usuario no ingresó el seteo');
        temporizador.innerHTML = `00:00`;
    }else{
        minutos = e.target.value;
        temporizador.innerHTML = `${minutos}:00`
    }

}

function realizarConteo(){
    let minutos = Math.floor(segundosTotal/60);
    let segundos = segundosTotal % 60;
    
    if(segundos < 10){
        segundos = '0'+segundos;
    } 
    temporizador.innerHTML = `${minutos}:${segundos}`

    if(segundosTotal>0){
        segundosTotal--
    }else{
        sonido.play();
        
    }
};

const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};

const sonido = cargarSonido("alarma1.mp3");

