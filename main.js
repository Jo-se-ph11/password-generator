const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2",
 "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2 ");

function generatePassword() {
    passWord1();
    passWord2();
}

function passWord1() {
    let arr1 = [];
    for (let i = 0; i < characters.length; i++) {
        let random1 = Math.floor(Math.random() * characters.length);
        if(arr1.length < 15) {
            arr1.push(characters[random1])
            display1.textContent = arr1.join("")
            
        }
    }

}

function passWord2() {
    let arr2 = [];
    for (let i = 0; i < characters.length; i++) {
        let random2 = Math.floor(Math.random() * characters.length);
        if(arr2.length < 15) {
            arr2.push(characters[random2]);
            display2.textContent = arr2.join("")
            
        }
    }
}
