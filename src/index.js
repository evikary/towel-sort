// You should implement your task here.

function towelSort(matrix) {
    let res = [];
    if (!matrix) {
        return res;
    }

    matrix.map((item, index) => {
        index % 2 === 0 ? res.push(...item) : res.push(...item.reverse());
    });

    return res;
}

//solved by a cycle

// function towelSort(matrix) {
//     let res = [];
//     if (!matrix) {
//         return res;
//     }

//     for (let i = 0; i <= matrix.length - 1; i++) {
//         if (i % 2 === 0) {
//             for (let j = 0; j <= matrix[i].length - 1; j++) {
//                 res.push(matrix[i][j]);
//             }
//         } else {
//             for (let j = matrix[i].length - 1; j >= 0; j--) {
//                 res.push(matrix[i][j]);
//             }
//         }
//     }

//     return res;
// }

module.exports = towelSort;
