var service = require("./service");
// récupération du module `readline`
var readline = require('readline');

function start(){
console.log("1.Lister les clients \n99. Sortir")
}



// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rep = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

// récupération de la saisie utilisateur 
rep.question('Veuillez saisir un nombre : ', function(saisie) {
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
        service.listerClients(function(resultat){
            if(resultat.error){
                console.log('oops...')
            }else {
                console.log(resultat.data);
            }
            start();
           
        });
        
        break;

        case "2":
            break;
        case "99":
        console.log("Aurevoir");
        rep.close();
        this.process.exit(); // Met fin au programme
        break;

}

 });
 exports.start = start;
