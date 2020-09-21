"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
var service_1 = require("./service");
var readline_1 = __importDefault(require("readline"));
var monService = new service_1.Service();
// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Presentation = /** @class */ (function () {
    function Presentation(service) {
        this.monService = service;
    }
    Presentation.prototype.start = function () {
        var _this = this;
        console.log('** Administration Hotel **');
        console.log("1. Lister les clients");
        console.log("2. Ajouter un client");
        console.log("3. Rechercher un client par nom");
        console.log("4. Vérifier la disponibilité d'une chambre");
        console.log("99. Sortir\n");
        // récupération de la saisie utilisateur
        rl.question("Choisissez un numéro : ", function (saisie) {
            switch (saisie) {
                case "1":
                    console.log("\n>> Liste des clients\n");
                    monService.listerClients()
                        .then(function (listClients) { return console.log(listClients
                        .map(function (client) { return client.toString(); })
                        .join('\n')); })
                        .catch(function (err) { return console.log(err); })
                        .finally(function () {
                        console.log("\r");
                        _this.start();
                    });
                    break;
                case "2":
                    console.log("\n>> Ajouter un client\n");
                    rl.question("Entrez un Nom : ", function (saisieNom) {
                        rl.question("Entrez un Prenom : ", function (saisiePrenom) {
                            monService.posterClient(saisieNom, saisiePrenom)
                                .then(function () { return console.log(saisieNom + " " + saisiePrenom + " a \u00E9t\u00E9 ajout\u00E9 !"); })
                                .catch(function (err) { return console.log(err); })
                                .finally(function () {
                                console.log("\r");
                                _this.start();
                            });
                        });
                    });
                    break;
                case "3":
                    console.log("\n>> Rechercher un client par nom\n");
                    rl.question("Entrez le Nom à chercher: ", function (saisieNom) {
                        monService.findByName(saisieNom)
                            .then(function (clients) { return console.log(clients
                            .map(function (client) { return client.toString(); })
                            .join('\n')); })
                            .catch(function (err) { return console.log(err); })
                            .finally(function () {
                            console.log("\r");
                            _this.start();
                        });
                    });
                    break;
                case "4":
                    console.log("\n>> Vérifier la disponibilité d'une chambre\n");
                    console.log("\nComing soon!\n");
                    _this.start();
                    break;
                case "99":
                    console.log("\nAurevoir !");
                    process.exit();
                default:
                    console.log("\nTU SAIS PAS LIRE? 1, 2, 3, 4 ou 99 ! Retry =>");
                    _this.start();
                    break;
            }
        });
    };
    return Presentation;
}());
exports.Presentation = Presentation;
