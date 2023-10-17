export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function (
        target: any,
        propertyKey: string, // qual é o metódo
        descriptor: PropertyDescriptor
    ) {

        const metodoOriginal = descriptor.value // acessa a implementação do metódo
        descriptor.value = function (...args: any[]) {
            let medida = 'milisegundos'
            let divisor = 1
            if (emSegundos) {
                medida = 'segundos'
                divisor = 1000
            }
            const t1 = performance.now() // calcula a performace
            const retorno = metodoOriginal.apply(this, args);
            // tem que ser sem o () pq assim eu não perco o this, pq muda de escopo
            // o aplly executa o metódo, em algum contexto(this) os argumumentos passados(args)
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução de ${(t2 - t1) / divisor} ${medida}`)
            retorno
        }
        }
}