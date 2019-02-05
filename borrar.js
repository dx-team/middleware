const Middleware = require('./src');
class Ejemplo extends Middleware {
    constructor() {
        super();
    }
}

const ejemplo = new Ejemplo();
ejemplo.use(async (array, next) => {
    console.group('Wrapper');

    const last = await next();
    console.log('Middle 1 - Array:', array);
    console.log('Middle 1 - Last:', last);
    console.log();

    console.groupEnd();

    return 'Output middle 1';
});
ejemplo.use(async (array, next) => {
    array.push(array.slice(-2).reduce((t, i) => t + i, 0));
    const last = await next();
    array.push(array.slice(-2).reduce((t, i) => t + i, 0));
    console.log(` # El valor ${array.slice(-1)} no llega al main ya que se inserta luego de su ejecucion -->`)

    console.log('Middle 2 - Array:', array);
    console.log('Middle 2 - Last:', last);
    console.log();

    return 'Output middle 2';
});
ejemplo.use(async (array, next) => {
    const last = await next();

    console.log('Middle 3 - Array:', array);
    console.log('Middle 3 - Last:', last);
    console.log();

    return 'Output middle 3';
});

ejemplo.run([1, 2, 3, 5, 8, 13, 21], (array) => {
    console.log('Main action arguments:', array);
    console.log();

    return 'Output main action';
});