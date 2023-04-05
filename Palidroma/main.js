let wordAsk = prompt("Inserisci una parola");

function parolaPalindroma (wordAsk){

    //controllo che la parola inserita sia valida
    while(!isNaN(wordAsk) || wordAsk == ""){
        wordAsk = prompt("Inserisci una parola valida");
    }

    //divido la parola in un array
    let wordAskSplit = wordAsk.split('');
    console.log(wordAskSplit);

    //inverto le lettere della parola nell'array
    let wordAskReverse = wordAskSplit.reverse('');
    console.log(wordAskSplit);

    //riunisco le lettere, questa volta invertite
    let wordAskJoin = wordAskReverse.join('');
    console.log(wordAskReverse);

    //se la parola originale coincide con la parola invertita, allora è palindroma
    if (wordAsk == wordAskJoin){
        console.log("La parola è palindroma.");
    }
    else {
        console.log("La parola non è palindroma.");
    }

}


let isWordPalindrome = parolaPalindroma(wordAsk);