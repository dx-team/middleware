const Utils = require('../src/libs/utils');

test('Utils', async () => {
    expect(typeof Utils.addProp).toEqual('function')
});

test('addProp util', async () => {
    const obj = {};
    const name = 'propName';
    const value = 42;

    Utils.addProp(obj, name, value);

    expect(obj).toHaveProperty(name);
    expect(obj[name]).toBe(value);
});