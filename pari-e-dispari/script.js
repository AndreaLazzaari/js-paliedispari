// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
// Dichiariamo chi ha vinto.


const sceltaPariDispari = prompt('scegli tra pari o dispari')
const numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
// let numeroComputer 


function numeroRandom(numero){
    numeroComputer = alert(Math.round(Math.random() * 5))
    return numeroComputer
}

numeroComputer
let somma = numeroUtente + numeroComputer
console.log(somma)
