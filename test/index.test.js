const sinon = require('sinon');
const Middleware = require('../src');
class Ejemplo extends Middleware {
    constructor() {
        super();
    }

}
test('dxlibs-middleware', async () => {
    const ejemplo = new Ejemplo();

    expect(ejemplo).toBeInstanceOf(Ejemplo);
    expect(ejemplo).toBeInstanceOf(Middleware);
});
test('run method', async () => {
    const ejemplo = new Ejemplo();
    const runSpy = sinon.spy();

    ejemplo.run(runSpy);
    sinon.assert.notCalled(runSpy);

    ejemplo.use((next)=>{
        next();
    });
    ejemplo.run(runSpy);
    sinon.assert.called(runSpy);

});
test('use method', async () => {
    const ejemplo = new Ejemplo();
    const useSpy = sinon.spy();
    const runSpy = sinon.spy();

    ejemplo.use(useSpy);
    ejemplo.run(runSpy);

    sinon.assert.called(useSpy);
});




// // ejemplo
// //     .use((a, b, c, next) => {
// //         console.log(1, a, b, c);
// //         next();
// //     })
// //     .use((a, b, c, next) => {
// //         console.log(2, a, b, c);
// //         next();
// //     })
// //     .use((a, b, c, next) => {
// //         console.log(3, a, b, c);
// //         next();
// //     })

// // ejemplo.go(function () {
// //     console.log(this.hook1); // true
// //     console.log(this.hook2); // true
// // });


// // ejemplo.use(function (a, next) {
// //     var self = this;

// //     console.log('use 1:', arguments);
// //     setTimeout(function () {
// //         self.hook1 = true;
// //         next();
// //     }, 10);
// // });

// // ejemplo.use(function (a, next) {
// //     var self = this;

// //     console.log('use 2:', arguments);
// //     setTimeout(function () {
// //         self.hook2 = true;
// //         next();
// //     }, 10);
// // });


// // ejemplo.use(function (a, b, next) {
// //     console.log('use 1:', Array.prototype.slice.call(arguments));

// //     next();
// // });

// // ejemplo.use(function (a, next) {
// //     console.log('use 2:', a);

// //     next();
// // });
// var start = new Date();
// console.log('-----------------------------');
// // ejemplo.go(123, 321, function (a, b) {
// //     console.log('-----------------------------');
// //     console.log('CB 3:', new Date() - start); // around 20
// //     console.log('CB 4:', a); // true
// //     console.log('CB 5:', arguments);
// // });
// // ejemplo.go();
// ejemplo.go((a,b,c) => {
//     console.log(a,b,c);
// });
// // ejemplo.go(1, 2, 3, () => {});