let { add }= require("../src/simple_calculator")
let { multiply }= require("../src/simple_calculator")


describe("simplecalculator", function () {


   it ("should add two integers", function() {
   expect(add(1,2)).toEqual(3);
})

 it ("should add multiple integers", function() {
    expect(add(1,2,3,4,5)).toEqual(15);
 })

it ("should multiply two integers", function() {
    expect(multiply(1,3)).toEqual(3);
 })

it ("should multiply multiple integers", function() {
   expect(multiply(1,2,3,4,5)).toEqual(120);
})
})
