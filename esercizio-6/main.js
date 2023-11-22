
    /*1. In un commento, scrivi quanti oggetti l’espressione soprastante ha inserito in
    memoria ed elencali. (2.5 punti)
    2. Crea una variabile chiamata teamLead che faccia riferimento alla proprietà lead
    dell'oggetto devTeam . Aggiungi "GraphQL" alle skills di teamLead.
    3. Crea una copia dell'oggetto devTeam e memorizzala in una nuova variabile
    chiamata devTeamCopy . Non puoi usare la funzione integrata structuredClone . Poi,
    cambia la proprietà projectName di devTeamCopy in "MobileApp". (2.5 punti)
    4. Costruisci una funzione che crea e restituisce un oggetto tester a partire dal
    parametro name (stringa). Durante la creazione dell’oggetto, la funzione
    dovrebbe anche assegnare un array skills con tre stringhe casuali tra
    "JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django",
    "PostgreSQL". (5 punti)
    Usa questa funzione per aggiungere un nuovo tester a devTeamCopy. (2.5 punti)
    5. In un commento, scrivi quanti oggetti sono stati creati in memoria oltre a quelli
    iniziali, e giustifica la tua risposta. (2.5 punti)*/

  const devTeam = {
        lead: {
        name: "Alice",
        skills: ["JavaScript", "React", "Node.js"]
    },
    testers: [
        { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
        { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] }
    ],
    projectName: "WebApp"
};  

/*gli oggetti inseriti in memoria sono:  l'oggetto principale 'devTeam', 
l'oggetto 'lead' al cui interno contiene l'oggetto skills, testers e
i due oggetti all'interno di testers e dentro testers gli oggetti skills 
per un totale di 8 */

const teamLead = devTeam.lead;
teamLead.skills.push("GraphQL");

const devTeamCopy = {...devTeam};
devTeamCopy.projectName = "mobileApp";

function createTester(name){
    const arraySkills =[ "JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django","PostgreSQL"];
    const skills = [];
    for(let i =0; i<3; i++){
        const randomSkills = arraySkills [Math.floor(Math.random()* arraySkills.length)];
        skills.push(randomSkills);
    }
    return {name, skills};
}
