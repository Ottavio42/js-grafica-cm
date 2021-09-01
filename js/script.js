
var numero = parseInt(prompt("inserisci un numero uguale superiore di 10: ")) ;
while( numero < 10){
    numero =  parseInt(prompt(" ERRORE!, inserisci un numero uguale superiore di 10:"));
}


for ( var i=1; i <= numero ; i++){

    document.getElementById("campo").innerHTML += "<div class= \"quadrato\">" + i + "</div>";

}

document.getElementById("campo").addEventListener("click" , 
function(event){

    event.target.classList.toggle("cliccato");
    alert(event.target.innerHTML)
}
);