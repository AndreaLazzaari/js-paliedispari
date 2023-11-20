// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// E' vietato usare split(), reverse() e simili.


// crediti esercizio coding creativo

const parola = prompt('inserisci una parola')
let parolaInversa = parolaInvertita(parola)

if (parola === parolaInversa) {
    console.log('la parola è palindroma')
} else {
    console.log('la parola non è palindroma')
}

function parolaInvertita(stringa) {
    let parolaInversa = '';

    let i = stringa.length -1;

    while (i >= 0) {
        parolaInversa += stringa[i];
        i--;
    }

    return parolaInversa
}
