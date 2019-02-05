const addProp = (target, name, value, options = {}) => {
    Object.defineProperty(target, name, {
        value
    });
};

const Utils = {
    addProp
};

module.exports = Utils;
module.exports.Utils = Utils;
module.exports.default = Utils;