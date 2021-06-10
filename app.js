let seteoTiempo= 1;

let segundosTotal = seteoTiempo * 60; 



const temporizador = document.getElementById("temporizador");

if(segundosTotal > 0){
    setInterval(realizarConteo, 1000)
}else{
    temporizador.innerHTML = `00:00`
    console.log("Bandera")
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
    }
};

