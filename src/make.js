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





    // return function(y,z,a) {
    //         return function (b){
    //           return function(sum){
    //               return x+y+z+a+b;
    //           };
    //         }
    // };
};



module.exports = make