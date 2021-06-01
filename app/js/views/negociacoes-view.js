System.register(["./view"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var view_1, NegociacoesView;
    return {
        setters: [
            function (view_1_1) {
                view_1 = view_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends view_1.View {
                template(model) {
                    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            <tr>
                ${model
                        .paraArray()
                        .map((negociacao) => {
                        return `<tr>
                    <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}
                    </td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                    </tr>`;
                    })
                        .join('')}
            
            </tr>
            
            </tbody>

            <tfoot>
            </tfoot>
        </table>            

        `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
