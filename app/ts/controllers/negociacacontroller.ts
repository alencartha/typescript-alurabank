import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { logarTempoDeExecucao } from '../helpers/decorators/tempoDeExecucao';
import { domInject } from '../helpers/decorators/index';


export class NegociacaoController {

  @domInject('#data')
    private _inputData: JQuery;
  
  
  @domInject('#quantidade')
    private _inputQuantidade: JQuery;
  

  @domInject('#valor')
    private _inputValor: JQuery;
  
  
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoes-view');
  private _mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this._negociacoesView.update(this._negociacoes);
  }
 
  @logarTempoDeExecucao()
  adiciona(event: Event) {
    event.preventDefault();

    let data = new Date(this._inputData.val().replace(/-/g, ','));

    if (this.ehDiaUtil(data)) {
      this._mensagemView.update('Somente negociações em dias úteis, por favor.');
      return
    }

    const negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val())
    );

    this._negociacoes.adiciona(negociacao);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!');
  }

  private ehDiaUtil(data: Date) {
    return (
      data.getDay() != diaDaSemana.Sabado ||
      data.getDay() != diaDaSemana.Domingo
    );
  }
}

enum diaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
}
