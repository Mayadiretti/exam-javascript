/*1. Aggiungi una nuova proprietà rating all'oggetto libro, che rappresenta il rating
del libro, e inizializzalo a 6.
2. Aggiungi un metodo increaseRating che accetta come argomento un valore
numerico e che incrementa il rating del libro del valore passato alla funzione. (10
punti)
Il nuovo rating risultante, non può superare 10. (2.5 punti)
3. Rimuovi la proprietà year dall'oggetto libro. (2.5 punti)
4. Stampa in console ogni proprietà dell'oggetto libro in questo formato: "[chiave]:
[valore]"*/

const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};

book.rating = 6;

book.increaseRating = function(valore){
   this.rating += valore;
   if(this.rating > 10){
    this.rating = 10;
   }
};

delete book.year;

for(const key in book){
    console.log(`${key}: ${book[key]}`);
}
 

//prova per capire se funziona
/*book.increaseRating(10);
console.log("nuovo rating:", book.rating)*/




