// You should implement your task here.

function towelSort(matrix) {
    let res = [];
    if (!matrix) {
        return res;
    }
    matrix.forEach((item, index) => {
        if (index % 2 === 0) {
            for (let i = 0; i <= item.length - 1; i++) {
                res.push(item[i]);
            }
        } else {
            for (let i = item.length - 1; i >= 0; i--) {
                res.push(item[i]);
            }
        }
    });

    return res;
}

module.exports = towelSort;
