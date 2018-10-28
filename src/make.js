// function make(15)(34)(41){

function make(x) {
    const arr = [];
    for(var i = 0; i < arguments.length; i++ ){
        arr.push(arguments[i]);
    }
    return function add(y) {
        if (typeof y !== 'function') {
            for(var i = 0; i < arguments.length; i++ ){
                arr.push(arguments[i]);
            }
            return add;
        }
        return arr.reduce(y, 0);
    }
};

module.exports = make