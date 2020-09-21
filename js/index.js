"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var presentation_1 = require("./presentation"); // require
var service_1 = require("./service"); // require
var service = new service_1.Service();
var presentation = new presentation_1.Presentation(service);
presentation.start();
