

const readline = require("readline-sync");
const size = 8

console.log("Enter knight position on "+size+'x'+size+" board:\nRow : ")
let a = Number(readline.question());
console.log("Column : ")
let b = Number(readline.question());

console.log("Possible moves from start position : ",[a,b])

const posibleMoves = (i, j) => [
    [i - 2, j - 1],
    [i - 1, j - 2],
    [i - 2, j + 1],
    [i - 1, j + 2],
    [i + 2, j - 1],
    [i + 1, j - 2],
    [i + 2, j + 1],
    [i + 1, j + 2],
].filter(move => (move.every((m) => m >= 1 && m <=8 )))

console.dir(posibleMoves(a,b))
