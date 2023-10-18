export function domInjector(seletor: string) {
  // decoretor de propriedade
  return function (target: any, propertyKey: string) {
    console.log(`Modificando protype ${target.constructor.name} e
            adicionando getter para a propriedade ${propertyKey}
        `);

    let elemento: HTMLElement;
    const getter = function () {
      if (!elemento) {
        elemento = document.querySelector(seletor) as HTMLElement;
        console.log(
          `Busacando elemento DOM com o seletor ${seletor} para injetar em ${propertyKey}`
        );
      }
      return elemento;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
    });
  };
}

// @domInjector(#teste)
