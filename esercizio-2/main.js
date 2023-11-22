/*Scrivi una funzione JavaScript che:
1. Accetta un array di stringhe come argomento.
2. Calcola la concatenazione di tutte le stringhe che iniziano con la lettera "A" o "a".
(10 punti)
3. Se la lunghezza della stringa concatenata supera i 10 caratteri, troncala a 10
caratteri e restituiscila. (5 punti)
4. Se il ciclo si completa senza che la stringa superi i 10 caratteri, restituisci la
stringa concatenata.*/
const arrayStringhe = ["alessio","francesco","Max","Alfoso","adriano"];

function concatenaStringheA(arrayStringhe){
    let stringConcatenata = '';
    for(let i = 0; i<arrayStringhe.length; i++){
        if(arrayStringhe[i].charAt(0).toLowerCase()==='a'){
            stringConcatenata+=arrayStringhe[i];
        }else if(stringConcatenata.length>10){
            stringConcatenata = stringConcatenata.slice(0, 10);
            break;
        }
    }return stringConcatenata;
};


const risultato = concatenaStringheA(arrayStringhe);
console.log(risultato)