export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            const nomeDaClasse = this.constructor.name
            console.log(`@escape em ação na classe ${nomeDaClasse}`)
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
      return retorno;
    };
    return descriptor;
  };

