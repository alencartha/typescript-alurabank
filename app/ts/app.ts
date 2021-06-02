import {NegociacaoController} from './controllers/negociacacontroller'


const controller = new NegociacaoController();

$('.form').submit(controller.adiciona.bind(controller));

$('#botao-importa').click(controller.importarDados.bind(controller));