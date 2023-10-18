const u = require('./_dateformat.cjs');

const res = (...args) => {
    return u.default(...args);
}
Object.keys(u).forEach( k => { res[k] = u[k] } );
module.exports = res;
