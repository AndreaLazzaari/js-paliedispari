// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
// Dichiariamo chi ha vinto.


const sceltaPariDispari = prompt('scegli tra pari o dispari')
const numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));

let risultato = numeroRandom() 

let somma = numeroUtente + risultato
console.log(somma)

let risultatoSomma = pariODispari(somma)

if (risultatoSomma === sceltaPariDispari) {
    console.log('utente ha vinto')
} else {
    console.log('pc ha vinto')
}

// Funzioni
function numeroRandom(){
    let numeroComputer = Math.round(Math.random() * 5);
    return numeroComputer
}


function pariODispari(somma) {
    if (somma % 2 === 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}