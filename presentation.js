function start(){
console.log("1.Lister les clients \n99. Sortir")
}
exports.start = start;
// récupération du module `readline`
var readline = require('readline');
// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

// récupération de la saisie utilisateur 
rl.question('Veuillez saisir un nombre : ', function(saisie) {
// if(rl==1){
//     console.log(">> Liste des clients");
// }else if(rl==99){
//     console.log("Aurevoir");
   
// }else{
//     console.log("** Administration Hotel **");
// }
// rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
switch(saisie){
    case "1":
        console.log("1.Lister les clients \n99. Sortir");
        break;
    case "99":
        console.log("Aurevoir");
        break;

}

 });

