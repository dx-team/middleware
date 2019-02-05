const {
    addProp
} = require('./libs/utils');

/** Agrega funcionalidad de Middleware a una clase */
class Middleware {
    /** Crea una nueva instancia de Middleware */
    constructor() {
        let useCalled = false;

        this.run = async (...args) => {
            if (useCalled) {
                const next = args.pop();

                next();
            }
            return args;
        };

        addProp(this, 'use',
            /**
             * Agrega un middleware al workflow
             * @param {Function} fn - función middleware a agregar
             *
             * @return {this} - Retorna la actual instancia
             */
            (fn) => {
                useCalled = true;

                this.run = ((stack) => (async (...args) => {
                    const next = args.pop();

                    return stack.call(this, ...args, async () => fn.call(this, ...args, next.bind(this, ...args)));
                }).bind(this))(this.run);

                return this;
            }
        );
    }
}

module.exports = Middleware;
module.exports.Middleware = Middleware;
module.exports.default = Middleware;