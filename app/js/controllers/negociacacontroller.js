System.register(["../views/negociacoes-view", "../views/mensagem-view", "../models/negociacoes", "../models/negociacao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var negociacoes_view_1, mensagem_view_1, negociacoes_1, negociacao_1, NegociacaoController;
    return {
        setters: [
            function (negociacoes_view_1_1) {
                negociacoes_view_1 = negociacoes_view_1_1;
            },
            function (mensagem_view_1_1) {
                mensagem_view_1 = mensagem_view_1_1;
            },
            function (negociacoes_1_1) {
                negociacoes_1 = negociacoes_1_1;
            },
            function (negociacao_1_1) {
                negociacao_1 = negociacao_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new negociacoes_1.Negociacoes();
                    this._negociacoesView = new negociacoes_view_1.NegociacoesView('#negociacoes-view');
                    this._mensagemView = new mensagem_view_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new negociacao_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
