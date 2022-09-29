//Selectores

let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS", "PROGRAMACION"];
let tablero = document.getElementById("horca").getContext("2d");
let divCanvas = document.querySelector(".divCanvas")
let divBotonesHome = document.querySelector(".botones-home")
let botonVolverAEmpezar = document.querySelector(".btn-volver-a-empezar")
let palabraSecreta = "";
let letras = [];
let errores = 8; // máximo posible de erroes.


//Palabra Secreta

function escogerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
    return palabraSecreta;
}

function comprobarLetra(key){
    console.log(key)
    //Para la tabla ASCII, se asignan los números 65 a 90 inclusive, todas las letras del abecedario en mayúsculas (https://elcodigoascii.com.ar/)
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key)
        return false
    } else {
    return true
    }
}

function anadirLetraIncorrecta(){
    errores -= 1;
}


//Iniciar Juego
function iniciarJuego(){
    divCanvas.classList.remove("hidden");
    divBotonesHome.classList.add("hidden");

    escogerPalabraSecreta()
    dibujarCanvas()
    dibujarLinea()

    document.addEventListener('keydown', (ev) =>{
        let letra = ev.key.toUpperCase();
        console.log("LETRA: " + letra)
        if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
            for(let i=0; i<palabraSecreta.length; i++){
                if(palabraSecreta[i] === letra){
                    console.log("LETRA CORRECTA") 
                    escribirLetraCorrecta(i)}
            }
        } else{
            anadirLetraIncorrecta(letra)
            escribirLetraIncorrecta(letra, errores)
            dibujarAhorcado(errores)
            finalizarJuego()
        }
    })
    
}

//Volver a empezar

botonVolverAEmpezar.addEventListener('click', () => {
    location.reload();
})

//Finalizar el Juego



function finalizarJuego(){
    if(errores <0){
        alert("FIN DEL JUEGO!")
        location.reload()
    }
}

