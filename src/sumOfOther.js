
function sumOfOther(arr) {

    const result = [];


    arr.forEach((element, current) => {
        let sum = 0
        arr.forEach((elem, i) => {
            if (i !== current) {
                sum += elem
            }
        })
        result.push(sum)
    });
    return result
}

module.exports = sumOfOther