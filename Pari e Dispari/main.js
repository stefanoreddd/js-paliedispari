let userChoice = prompt("Scegli tra pari e dispari");

let userNumber = prompt("Scegli un numero tra 1 e 5");
userNumber = parseInt(userNumber);

while(userNumber < 1 || userNumber > 5 || userNumber == '' || isNaN(userNumber)){
    userNumber = prompt("Inserisci un numero valido");
}

let cpuNumber = Math.floor((Math.random() * 5) + 1)
cpuNumber = parseInt(cpuNumber);

let totalNumber = userNumber + cpuNumber;



function evenOddGame(){

    if(userChoice == "pari" && totalNumber % 2 == 0){
        console.log("Numero utente: " + userNumber);
        console.log("Numero Computer: " + cpuNumber);
        console.log("Totale:" + totalNumber);
        console.log("Il numero è pari! Vince il giocatore!");
    }
    else if(userChoice == "dispari" && totalNumber % 2 !== 0){
        console.log("Numero utente: " + userNumber);
        console.log("Numero Computer: " + cpuNumber);
        console.log("Totale: " + totalNumber);
        console.log("Il numero è dispari! Vince il giocatore!");
    }
    else if(userChoice == "pari" && totalNumber % 2 !== 0){
        console.log("Numero utente: " + userNumber);
        console.log("Numero Computer: " + cpuNumber);
        console.log("Totale: " + totalNumber);
        console.log("Il numero è dispari! Vince il computer!");
    } 
    else if(userChoice == "dispari" && totalNumber % 2 == 0){
        console.log("Numero utente: " + userNumber);
        console.log("Numero Computer: " + cpuNumber);
        console.log("Totale: " + totalNumber);
        console.log("Il numero è pari! Vince il computer!");
    }

}


let playGame = evenOddGame(totalNumber);