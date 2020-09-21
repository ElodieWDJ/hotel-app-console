"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(uuid, nom, prenoms) {
        this.uuid = uuid;
        this.nom = nom;
        this.prenoms = prenoms;
    }
    Client.prototype.toString = function () {
        return this.uuid + " " + this.nom + " " + this.prenoms;
    };
    return Client;
}());
exports.Client = Client;
