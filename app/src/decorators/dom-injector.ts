export function domInjector(seletor: string) {
  // decoretor de propriedade
    return function (target: any, propertyKey: string) {
        console.log(`Modificando protype ${target.contructor.name} e
            adicionando getter para a propriedade ${propertyKey}
        ` )
        const getter = function () {
            const elemento = document.querySelector(seletor)
            console.log(`Busacando elemento DOM com o seletor ${seletor} para injetar em ${propertyKey}`)
            return elemento
        }

        Object.defineProperty(
            target,
            propertyKey,
            {
                get: getter
            }
        )


  };
}

// @domInjector(#teste)
