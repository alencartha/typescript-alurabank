System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, diaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoes-view');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (this.ehDiaUtil(data)) {
                        this._mensagemView.update('Somente negociações em dias úteis, por favor.');
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
                ehDiaUtil(data) {
                    return (data.getDay() != diaDaSemana.Sabado ||
                        data.getDay() != diaDaSemana.Domingo);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (diaDaSemana) {
                diaDaSemana[diaDaSemana["Domingo"] = 0] = "Domingo";
                diaDaSemana[diaDaSemana["Segunda"] = 1] = "Segunda";
                diaDaSemana[diaDaSemana["Terca"] = 2] = "Terca";
                diaDaSemana[diaDaSemana["Quarta"] = 3] = "Quarta";
                diaDaSemana[diaDaSemana["Quinta"] = 4] = "Quinta";
                diaDaSemana[diaDaSemana["Sexta"] = 5] = "Sexta";
                diaDaSemana[diaDaSemana["Sabado"] = 6] = "Sabado";
            })(diaDaSemana || (diaDaSemana = {}));
        }
    };
});
