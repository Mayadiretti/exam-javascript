/*Crea un programma JavaScript che:
1. Chieda all'utente il suo nome e lo memorizzi in una variabile. (2.5 punti)
2. Chieda all'utente il suo anno di nascita e lo memorizzi in un'altra variabile. (2.5
punti)
3. Visualizzi un messaggio che saluta l'utente con il suo nome e gli dice se è nato
in un anno bisestile. (5 punti)
⚠️ Un anno è bisestile se:
è divisibile per 4 e allo stesso tempo non è divisibile per 100;
oppure
se l'anno è divisibile per 400;*/

const user = prompt('inserisci il tuo nome');
const userName = user;
const year = prompt('inserisci il tuo anno di nascita');
const userYear = year;

    if(year % 4 == 0 && year % 100 != 0 || year % 400 ==0 ){
        alert(`ciao ${userName} sei nato in un anno bisestile`);
    }else{
        alert('non sei nato in un anno bisestile');
    };
    
    