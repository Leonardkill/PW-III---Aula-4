"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }
    Pessoa.prototype.imc = function () {
        return this.peso / (this.altura * this.altura);
    };
    Pessoa.prototype.classificar = function () {
        if (this.imc() < 18.5) {
            return "Abaixo do peso";
        }
        else if (this.imc() > 18.5 && this.imc() < 24.9) {
            return "Peso Normal";
        }
        else if (this.imc() > 25.0 && this.imc() < 29.9) {
            return "Pré Obesidade";
        }
        else if (this.imc() > 30.0 && this.imc() < 34.9) {
            return "Obesidade Grau 1";
        }
        else if (this.imc() > 35.0 && this.imc() < 39.9) {
            return "Obesidade Grau 2";
        }
        else if (this.imc() > 40.0) {
            return "Obesidade Grau 3";
        }
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
