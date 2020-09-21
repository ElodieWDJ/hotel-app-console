"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
var request_promise_native_1 = __importDefault(require("request-promise-native"));
var domains_1 = require("./domains");
//var backendUrl="https://hotel-web-appi.herokuapp.com/";
var Service = /** @class */ (function () {
    function Service() {
        this.request = request_promise_native_1.default;
    }
    Service.prototype.listerClients = function () {
        return this.request.get('https://hotel-web-appi.herokuapp.com/clients', { json: true })
            .then(function (result) { return result.map(function (clientBack) { return new domains_1.Client(clientBack.uuid, clientBack.nom, clientBack.prenoms); }); });
    };
    Service.prototype.findByName = function (nomAChercher) {
        return this.request.get("https://hotel-web-appi.herokuapp.com/clients/nom=" + nomAChercher, { json: true })
            .then(function (result) { return result.map(function (clientBack) { return new domains_1.Client(clientBack.uuid, clientBack.nom, clientBack.prenoms); }); });
    };
    Service.prototype.posterClient = function (saisieNom, saisiePrenom) {
        return this.request.post({
            url: 'https://hotel-web-appi.herokuapp.com/clients',
            method: 'POST',
            json: {
                nom: saisieNom,
                prenoms: saisiePrenom
            }
        });
    };
    return Service;
}());
exports.Service = Service;
