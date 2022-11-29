const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomPasswordOne = document.getElementById("passwordOne")
let randomPasswordTwo = document.getElementById("passwordTwo")

function randomItem() {
    return characters[Math.floor(Math.random() * characters.length)]
}

 
let passwordLength = 15

function generateRandomPassword() {
    let resultOne = ""
    let resultTwo = "" 
for (let i = 0; i < 15; i++) {
    resultOne += randomItem()
    resultTwo += randomItem()
    randomPasswordOne.textContent = resultOne
    randomPasswordTwo.textContent = resultTwo
}
    return resultOne
    return resultTwo
}

console.log(generateRandomPassword())



