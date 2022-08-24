/*
Requirements:

    -   Array to hold all possible chars. Check
    -   Button to generate 4 random password options Check
    -   Display password options Check
    -   Stretch: ability to set password length Check
    -   Stretch: 1click copy password to clipboard.
    
*/

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let password3El = document.getElementById("password3-el")
let password4El = document.getElementById("password4-el")
let length = document.getElementById("length")

let passwordArray = [password1El, password2El, password3El, password4El]

let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

let arrayChar = toCharArray(characters);


function generatePasswords() {
    for (let p = 0; p < passwordArray.length; p++) {
        passwordArray[p].textContent = ""
        for (let i = 0; i < length.value; i++) {
            let randomIndex = Math.floor(Math.random() * (arrayChar.length))
            passwordArray[p].value += arrayChar[randomIndex]
        }
    }
}

function toCharArray(str) {
    let charArray = []
    for (var i = 0; i < str.length; i++) {
        charArray.push(str[i])
    }
    return charArray;
}

function copy() {
    let copyText = password1El

    copyText.select()

    navigator.clipboard.writeText(copyText.value)

    // alert("Copied the password to your clipboard")

}

function copy2() {
    let copyText = password2El

    copyText.select()

    navigator.clipboard.writeText(copyText.value)


    // alert("Copied the password to your clipboard")
}

function copy3() {
    let copyText = password3El

    copyText.select()

    navigator.clipboard.writeText(copyText.value)

    // alert("Copied the password to your clipboard")
}

function copy4() {
    let copyText = password4El

    copyText.select()


    navigator.clipboard.writeText(copyText.value)


    // alert("Copied the password to your clipboard")
}


