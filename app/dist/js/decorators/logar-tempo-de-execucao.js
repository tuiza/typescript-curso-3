export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let medida = 'milisegundos';
            let divisor = 1;
            if (emSegundos) {
                medida = 'segundos';
                divisor = 1000;
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução de ${(t2 - t1) / divisor} ${medida}`);
            retorno;
        };
    };
}
