// Initialize the different elements inputted number and text

let mtofEl = document.getElementById("mtof-el")
let gtolEl = document.getElementById("gtol-el")
let ptokEl = document.getElementById("ptok-el")
let lengthResult = mtofEl.textContent
let volumeResult = gtolEl.textContent
let weightResult = ptokEl.textContent


function meterToFeet() {
    unit1 = " meters = "
    unit2 = " feet"
    converter = 3.28084
    var number = document.getElementById("number").value
    result = number * converter
    roundedResult = Math.round(result*1000)/1000
    mtofEl.textContent = number + unit1 + roundedResult + unit2
}

function feetToMeter() {
    unit1 = " feet = "
    unit2 = " meters"
    converter = 0.3048
    var number = document.getElementById("number").value
    result = number * converter
    roundedResult = Math.round(result*1000)/1000
    mtofEl.textContent += " | " + number + unit1 + roundedResult + unit2
    }



//////////////////Liters to Gallion and vice versa\\\\\\\\\\\\\\\\\\\\\
function literToGallons() {
    unit1 = " liters = "
    unit2 = " gallons"
    converter = 0.2199692
    var number = document.getElementById("number").value
    result = number * converter
    roundedResult = Math.round(result*1000)/1000
    gtolEl.textContent = number + unit1 + roundedResult + unit2
}

function gallonsToLiters() {
    unit1 = " gallons = "
    unit2 = " liters"
    converter = 4.54609
    var number = document.getElementById("number").value
    result = number * converter
    roundedResult = Math.round(result*1000)/1000
    gtolEl.textContent += " | " + number + unit1 + roundedResult + unit2
}

/////////////////// Kilogras to Pounds and vice versa\\\\\\\\\\\\\\

function kiloToPounds() {
    unit1 = " kilos = "
    unit2 = " pounds"
    converter = 2.204623
    var number = document.getElementById("number").value
    result = number * converter
    roundedResult = Math.round(result*1000)/1000
    ptokEl.textContent = number + unit1 + roundedResult + unit2
}

function poundsToKilo() {
    unit1 = " pounds = "
    unit2 = " kilos"
    converter = 0.4535924
    var number = document.getElementById("number").value
    result = number * converter
    roundedResult = Math.round(result*1000)/1000
    ptokEl.textContent += " | " + number + unit1 + roundedResult + unit2
}

function callAll() {
    meterToFeet()
    feetToMeter()
    literToGallons()
    gallonsToLiters()
    kiloToPounds()
    poundsToKilo()
}
