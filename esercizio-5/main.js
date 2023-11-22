/*Scrivi una funzione power per elevare un numero ad una potenza data:
1. Prende due numeri come parametri ( base e exponent ).
2. Controlla che effettivamente siano stati passati due numeri. In caso contrario,
lancia un errore che mostra nel messaggio quale dei parametri non è un numero. Se entrambi non sono dei numeri, il messaggio d’errore li mostra
entrambi. (15 punti)
3. Nel caso in cui sia avvenuto un errore, la funzione ritorna null , altrimenti ritorna
base elevato alla exponent. (2.5 punti)
4. Indipendentemente dal successo o dal fallimento, stampa in console un
messaggio che indica che l'operazione è completa. (2.5 punti)*/

function power (base, exponent){
    if(isNaN(base)){
        console.error('la base non è un numero valido');
        return null;
    }else if(isNaN(exponent)){
        console.error(`l'esponente non è un numero valido`);
        return null;
    }else if(isNaN(base) && isNaN(exponent)){
        console.error(`${base} ed ${exponent} non sono numeri validi`);
        return null;
    }else{
        return base ** exponent
    }
}

//prova
//const risultato = power(2 , "ciao");
//console.log(risultato);

console.log('operazione completata');