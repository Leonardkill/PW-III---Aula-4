"use strict";
exports.__esModule = true;
var pessoa_1 = require("./pessoa");
var leonardo = new pessoa_1.Pessoa(68, 1.70);
console.log(leonardo.imc());
console.log(leonardo.classificar());
