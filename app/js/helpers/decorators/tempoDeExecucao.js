System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao(emSegundos = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = 'milisegundos';
                let divisor = 1;
                if (emSegundos) {
                    unidade = 'segundos';
                    divisor = 1000;
                }
                console.log('-------------');
                console.log(`Parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                metodoOriginal.apply(this, args);
                const retorno = metodoOriginal;
                const t2 = performance.now();
                console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);
                console.log(`O método ${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
