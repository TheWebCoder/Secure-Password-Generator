const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = ""
let pass2 = ""

let generateBtnEl = document.getElementById("generate-btn")
let pass1El = document.querySelector(".password-bg")
let pass2El = document.querySelector(".password-bg2")
generateBtnEl.addEventListener("click", displayPassword)


function generatePassword() {
    let ranPass = ""
    let ranIndex = 0
    for (let i = 0; i < 15; i++) {
        ranIndex = Math.floor(Math.random() * 91)
        ranPass += characters[ranIndex]
    }
    return ranPass
}

function displayPassword() {
    pass1El.textContent = generatePassword()
    pass2El.textContent = generatePassword()
}