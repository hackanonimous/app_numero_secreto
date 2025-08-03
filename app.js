//almacenamos en un variable el numero aleatorio que retorna la funcion generaNumeroSecreto
let numerosSecretos=[];
let numeroMaximo=10;
let numeroSecreto=generaNumeroSecreto(numeroMaximo);
let numeroIntentos=1;
// let titulo=document.querySelector("h1");
// titulo.textContent = "Juego del numero secreto";

// let descripcion=document.querySelector(".texto__parrafo");
// descripcion.textContent = "Ingrese un numero entre 1 y 10";

//creando una funcion reutilizable
function asignarTextoElemento(selector,texto){
  let elemento=document.querySelector(selector);
  elemento.textContent = texto;
}

//esta funcion comentada es un funcion de tipo flecha que hace lo mismo que la funcion intentoDeUsuario
// const intentoDeUsuario=()=>{
//   alert("click");
// }
function intentoDeUsuario(){
  //al ejecutar esta funcion puedo capturar el numero del input
  let numeroDeUsuario=Number(document.querySelector("#valorUsuario").value);
  //let numeroInput=document.getElementById("valorUsuario").value;
  if (numeroDeUsuario===numeroSecreto){
    asignarTextoElemento(".texto__parrafo",`Acertaste el número en ${numeroIntentos} ${numeroIntentos==1?"vez":"veces"}`);
    //remobemos el atributo disabled para que el boton se active
    document.querySelector("#reiniciar").removeAttribute("disabled")
  }else{
    if (numeroSecreto < numeroDeUsuario){
      asignarTextoElemento(".texto__parrafo","el número secreto es menor")
    }else{
      asignarTextoElemento(".texto__parrafo","el número secreto es mayor")
    }
    numeroIntentos++;
    limpiarInput();
  }
}

function limpiarInput() {
  let cajaNumero=document.querySelector("#valorUsuario");
  cajaNumero.value="";
  return;
}
//funcion para numero aleatorio
function generaNumeroSecreto(limite){
  let numeroGenerado=Math.floor((Math.random()*limite)+1);
  if (numerosSecretos.length === numeroMaximo){
    asignarTextoElemento(".texto__parrafo","Ya se sortearon todos los números posibles");
  }else{
    if (numerosSecretos.includes(numeroGenerado)){
      return generaNumeroSecreto(numeroMaximo);
    }else{
      numerosSecretos.push(numeroGenerado)
      return numeroGenerado;
    }
  }
  
}

//llamando las funciones para su ejecucion
//llamada a la funcion para generar el texto en los elementos que le indique
function valoresIniciales(){
  asignarTextoElemento("h1","Juego del número secreto");
  asignarTextoElemento(".texto__parrafo","Ingrese un número entre 1 y 10");
  numeroSecreto=generaNumeroSecreto(numeroMaximo);
  numeroIntentos=1;
}



// let reiniciarJuego=document.querySelector("#reiniciar");
// reiniciarJuego.addEventListener("click",()=>{
//   alert("reiniciar juego");
// })
function accionReinicar(){
  //limpiar la caja
  limpiarInput();
  //mensajes inicales
  valoresIniciales();  
  //desactivar boton
  document.querySelector("#reiniciar").setAttribute("disabled","true");
}
let reiniciarJuego=document.querySelector("#reiniciar");
reiniciarJuego.addEventListener("click",accionReinicar)
valoresIniciales();