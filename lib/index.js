"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dependencyInjection(inject) {
    const di = {};
    Object.keys(inject).forEach(key => {
        di[key] = new inject[key]();
    });
    return di;
}
exports.default = dependencyInjection;
//# sourceMappingURL=index.js.map