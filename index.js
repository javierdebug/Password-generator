
const password = document.querySelector(".output");
const generate = document.querySelector("#btn-generate");
const copy = document.querySelector("#btn-copy");
const error = document.querySelector("#errorMsg");

const specialChars = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126];
const numChars = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const lettersChars = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

generate.addEventListener("click", (e) => {
    let repeat = document.querySelector("#repeat").checked;
    let special = document.querySelector("#special").checked;
    let numbers = document.querySelector("#numbers").checked;
    let letters = document.querySelector("#letters").checked;
    
    let arr = [];
    if (special) {arr = arr.concat(specialChars)};
    
    if (numbers) {arr = arr.concat(numChars)};
    
    if (letters) {arr = arr.concat(lettersChars);};

    let passLength = document.querySelector("input").value;
    if (repeat & arr.length < passLength & arr.length > 0) {
        password.textContent = "";
        // alert(`With these conditions, you must repeat characters. Reduce length to ${arr.length}`);
        error.textContent = `With these conditions, some characters must be repeated. Reduce length to ${arr.length}.`;
        return
    }
    
    if (!special && !numbers && !letters) {
        password.textContent = "";
        error.textContent = "";
        // alert(`Please select an option to include letters, numbers or special characters`);
        error.append(`Please select an option to include letters, numbers or special characters.`);
        return
    }
    
    if (passLength < 5 || passLength > 999) {
        password.textContent = "";
        error.textContent = "";
        error.append(`Enter a length value between 5 and 999.`);
    }
    
    if (passLength >= 5 & passLength <= 999) {
        password.textContent = "";
        error.textContent = "";
        
        for (let i = 0; i < passLength; i++) {
            let random = Math.floor(Math.random() * (arr.length));
            let lower = Math.round(Math.random() + 1 );
            
            let string = "";
            if (lower == 1) {
                string = String.fromCharCode(arr[random]);
            } else {
                string = String.fromCharCode(arr[random]).toLowerCase();
            }

            if (repeat) {
                let index = arr.indexOf(arr[random]);
                arr.splice(index,1);
            }

            password.append(`${string}`);
        }
    }
})

copy.addEventListener("click", (e) => {
    let copiedText = document.querySelector("div.output").innerText;
    if (copiedText) {
        navigator.clipboard.writeText(copiedText);
        alert('Password copied to clipboard');
    }
})
