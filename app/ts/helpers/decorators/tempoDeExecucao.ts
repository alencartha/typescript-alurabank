export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let unidade = 'milisegundos';
      let divisor = 1;

      if (emSegundos) {
        unidade = 'segundos';
        divisor = 1000;
      }
      console.log('-------------');
      console.log(
        `Parâmetros passados para o método ${propertyKey}: ${JSON.stringify(
          args
        )}`
      );

      const t1 = performance.now();
      metodoOriginal.apply(this, args);
      const retorno = metodoOriginal;
      const t2 = performance.now();
      console.log(
        `O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`
      );
      console.log(
        `O método ${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`
      );
      return retorno;
    };

    return descriptor;
  };
}
