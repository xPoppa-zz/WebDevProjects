// Initialize the different elements inputted number and text

let mtofEl = document.getElementById("mtof-el")
let ftomEl = document.getElementById("ftom-el")
let ltogEl = document.getElementById("ltog-el")
let gtolEl = document.getElementById("gtol-el")
let ktopEl = document.getElementById("ktop-el")
let ptokEl = document.getElementById("ptok-el")


console.log("This is the number" + number)
// let useNumber = number.textContent
// console.log("should be the number value" + useNumber)
let numberValue = 8
useNumber = numberValue


function meterToFeet() {
    unit1 = " meters = "
    unit2 = " feet"
    converter = 3.28084
    var number = document.getElementById("number").value
    console.log("This is the number" + number)
    console.log("This is the number" + number)
    result = number * converter
    console.log("this is the result " + result)
    roundedResult = Math.round(result*1000)/1000
    console.log("this is the rounded result " + roundedResult)
    mtofEl.textContent = number + unit1 + roundedResult + unit2
}

function feetToMeter() {
    unit1 = " feet = "
    unit2 = " meters"
    converter = 0.3048
    var number = document.getElementById("number").value
    console.log("This is the number" + number)
    result = number * converter
    console.log("this is the result " + result)
    roundedResult = Math.round(result*1000)/1000
    console.log("this is the rounded result " + roundedResult)
    ftomEl.textContent = number + unit1 + roundedResult + unit2
    }



//////////////////Liters to Gallion and vice versa\\\\\\\\\\\\\\\\\\\\\
function literToGallons() {
    unit1 = " liters = "
    unit2 = " gallons"
    converter = 0.3048
    var number = document.getElementById("number").value
    console.log("This is the number" + number)
    result = number * converter
    console.log("this is the result " + result)
    roundedResult = Math.round(result*1000)/1000
    console.log("this is the rounded result " + roundedResult)
    ltogEl.textContent = number + unit1 + roundedResult + unit2
}

function gallonsToLiters() {
    unit1 = " gallons = "
    unit2 = " liters"    
    converter = 0.3048
    var number = document.getElementById("number").value
    console.log("This is the number" + number)
    result = number * converter
    console.log("this is the result " + result)
    roundedResult = Math.round(result*1000)/1000
    console.log("this is the rounded result " + roundedResult)
    gtolEl.textContent = number + unit1 + roundedResult + unit2
}

/////////////////// Kilogras to Pounds and vice versa\\\\\\\\\\\\\\

function kiloToPounds() {
    unit1 = " kilos = "
    unit2 = " pounds"    
    converter = 0.3048
    var number = document.getElementById("number").value
    console.log("This is the number" + number)
    result = number * converter
    console.log("this is the result " + result)
    roundedResult = Math.round(result*1000)/1000
    console.log("this is the rounded result " + roundedResult)
    ktopEl.textContent = number + unit1 + roundedResult + unit2
}

function poundsToKilo() {
    unit1 = " pounds = "
    unit2 = " kilos"    
    converter = 0.3048
    var number = document.getElementById("number").value
    console.log("This is the number" + number)
    result = number * converter
    console.log("this is the result " + result)
    roundedResult = Math.round(result*1000)/1000
    console.log("this is the rounded result " + roundedResult)
    ptokEl.textContent = number + unit1 + roundedResult + unit2
}

function callAll() {
    meterToFeet()
    feetToMeter()
    literToGallons()
    gallonsToLiters()
    kiloToPounds()
    poundsToKilo()
}

// meterToFeet()
// feetToMeter()
// literToGallons()
// gallonsToLiters()
// kiloToPounds()
// poundsToKilo()