import { View } from './view'
import {Negociacoes} from '../models/negociacoes'

export class NegociacoesView extends View<Negociacoes>{


  template(model: Negociacoes): string {
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
                    <td>${negociacao.data.getDate()}/${
                      negociacao.data.getMonth() + 1
                    }/${negociacao.data.getFullYear()}
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
}
