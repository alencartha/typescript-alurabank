System.register(["./controllers/negociacacontroller"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var negociacacontroller_1, controller;
    return {
        setters: [
            function (negociacacontroller_1_1) {
                negociacacontroller_1 = negociacacontroller_1_1;
            }
        ],
        execute: function () {
            controller = new negociacacontroller_1.NegociacaoController();
            $('.form').submit(controller.adiciona.bind(controller));
            $('#botao-importa').click(controller.importarDados.bind(controller));
        }
    };
});
