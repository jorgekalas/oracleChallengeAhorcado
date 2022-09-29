//Selectores

let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let tablero = document.getElementById("horca").getContext("2d");
let divCanvas = document.querySelector(".divCanvas")
let divGanaste = document.querySelector(".ganaste")
let divBotonesHome = document.querySelector(".botones-home")
let botonVolverAEmpezar = document.querySelector(".btn-volver-a-empezar")
let palabraSecreta = "";
let letras = [];
let errores = 8; // máximo posible de erroes.
let aciertos = 0;

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
        if(errores>=0 && aciertos<palabraSecreta.length){
            if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
                for(let i=0; i<palabraSecreta.length; i++){
                    if(palabraSecreta[i] === letra){
                        
                        console.log("LETRA CORRECTA") 
                        escribirLetraCorrecta(i)
                        aciertos ++}
                }
                verificarSiGano()
            } else{
                anadirLetraIncorrecta(letra)
                escribirLetraIncorrecta(letra, errores)
                dibujarAhorcado(errores)
                verificarSiPerdio()
            }
        }
        
    })
}

//Volver a empezar

botonVolverAEmpezar.addEventListener('click', () => {
    location.reload();
})

//Verificar si ganó o perdió


function verificarSiGano(){
    if(palabraSecreta.length == aciertos){
        console.log("GANASTE")
        let ganaste = `<p class="winStyle"> ¡Ganaste la partida!</p>`
        divGanaste.innerHTML = ganaste
        
    }
}

function verificarSiPerdio(){
    if(errores <0){
        console.log("GANASTE")
        let perdiste = `<p class="loseStyle"> ¡Perdiste la partida!</p>`
        divGanaste.innerHTML = perdiste
    }
}
