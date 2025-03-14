// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");

const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");


function agregarAmigo(){
    console.log("Añadiendo amigo")
    if(inputAmigo.value){
        console.log("Informacion")
        listaAmigos.push(inputAmigo.value);
    }else{
        console.log("No Informacion")
    }

    console.log(listaAmigos)
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;

}

function sortearAmigo(){
    console.log("Sarteando amigo")
    const random = Math.floor((Math.random() * listaAmigos.length));
    const amigoSecreto = listaAmigos[random];
    if(listaAmigos.length != 0){
        ulResultado.innerHTML = `<li>El amigo secreto es :${amigoSecreto}</li>`;
    }
    else{
        ulResultado.innerHTML=`<li>No hay ningun amigo añadido para sortear</li>`
    }
}

