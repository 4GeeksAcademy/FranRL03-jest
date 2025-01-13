const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = (dollar) => {

    if (typeof dollar !== 'number') {
        throw new Error('Input must be a number');
    }
    
    let oneDollarToYen = 156.5 / 1.07;

    return parseFloat((dollar * oneDollarToYen).toFixed(2));
   
}

const fromYenToPound = (yen) => {

    if (typeof yen !== 'number') {
        throw new Error('Input must be a number');
    }
    
    let oneYenToPound = 0.87 / 156.5;

    return parseFloat((yen * oneYenToPound).toFixed(2));
}

console.log(fromDollarToYen(100) + " yenes")
console.log(fromYenToPound(100) + " pounds")
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos
// (similar a la palabra "export" cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromYenToPound }