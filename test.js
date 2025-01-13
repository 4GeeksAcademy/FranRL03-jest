// importamos la función sum
const { sum, fromYenToPound, fromDollarToYen } = require('./app.js')

// Testing Black Box
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9)

    expect(total).toBe(23)
});


//Testing White Box
test('100 dollars are 14626.17', () => {

    let result = fromDollarToYen(100)
    // let resultWithText = fromDollarToYen("100")

    expect(result).toBe(14626.17)
    // expect(resultWithText).toThrow('Input must be a number')

    // para comprobar una excepción hay que envolverlo en una funcion anonima
    expect(() => fromDollarToYen("100")).toThrow('Input must be a number');
});

test("100 yenes are 0.56 pounds", () => {

    let result = fromYenToPound(100)

    expect(result).toBe(0.56)
    expect(() => fromYenToPound("100")).toThrow("Input must be a number");
    
})