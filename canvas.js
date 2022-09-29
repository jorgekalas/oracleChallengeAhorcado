//Dibujo del lienzo de fondo y la horca base

function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#FFF";
    tablero.strokeStyle = "#0A3871"

    tablero.fillRect(0,0,1200,800); // x, y, width, height 
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();
}


//Dibujo de los guiones de la palabra, en función de la cantidad de letras

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()
    let anchoGuion = 600/palabraSecreta.length
    for (let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500 + (anchoGuion*i), 640)
        tablero.lineTo(550 + (anchoGuion*i), 640)
    }
    tablero.stroke();
    tablero.closePath();
}

//Funciones para escribir la letra correcta o incorrecta

function escribirLetraCorrecta(i){
    tablero.font = "bold 63px Arial";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    let ancho = 600/palabraSecreta.length
    tablero.fillText(palabraSecreta[i], 505+(ancho*i), 620)
    tablero.stroke();
}

function escribirLetraIncorrecta(letra, erroresIzq){
    tablero.font = "bold 40px Arial";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    tablero.fillText(letra, 535+(40*(10-erroresIzq)), 710, 40) //letra, eje x, eje y, max width
}


// Función para dibujar el ahorcado


function dibujarAhorcado(puntaje) {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "#0A3871";
    if(puntaje===8){ //poste
    tablero.moveTo(700,500)
    tablero.lineTo(700,100)
    }
    if(puntaje===7){//base 
    tablero.moveTo(850,100)
    tablero.lineTo(700,100)
    }
    if(puntaje===6){//cuerda
    tablero.moveTo(850,100)
    tablero.lineTo(850,171)
    }
    if(puntaje===5){//rostro
    tablero.moveTo(900,230)
    tablero.arc(850,230,50,0,Math.PI*2)
    }
    if(puntaje===4){//cuerpo
    tablero.moveTo(850,389)
    tablero.lineTo(850,289)
    }
    if(puntaje===3){//pierna izq
    tablero.moveTo(850,389)
    tablero.lineTo(800,450)
    }
    if(puntaje===2){//pierna der
    tablero.moveTo(850,389)
    tablero.lineTo(890,450)
    }
    if(puntaje===1){//mano izq
    tablero.moveTo(850,330)
    tablero.lineTo(800,389)
    }
    if(puntaje===0){//mano der
    tablero.moveTo(850,330)
    tablero.lineTo(890,389)
    }
    tablero.stroke()
    tablero.closePath()
}

// Función de recarga de la página

function recargar(){
    location.reload(); 
}