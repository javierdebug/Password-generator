
const password = document.querySelector(".output");
const generate = document.querySelector("#btn-generate");
const copy = document.querySelector("#btn-copy")
// let minChar1 = 33;
// let maxChar1 = 126;
// let minChar2 = 0;
// let maxChar2 = 0;

const specialChars = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126];
const numChars = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const lettersChars = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

generate.addEventListener("click", (e) => {
    //let repeat = document.querySelector("#repeat").checked;
    let special = document.querySelector("#special").checked;
    let numbers = document.querySelector("#numbers").checked;
    let letters = document.querySelector("#letters").checked;
    
    let arr = [];
    if (special) {        
        minChar1 = 33;
        maxChar1 = 47;
        arr = arr.concat(specialChars);
    }
    
    if (numbers) {
        minChar1 = 48;
        maxChar1 = 57
        arr = arr.concat(numChars);
    };
    
    if (letters) {
        minChar1 = 65; 
        maxChar1 = 90
        arr = arr.concat(lettersChars);
    };

    //console.log(arr);

    let passLength = document.querySelector("input").value;
    if (passLength >= 5 & passLength <= 999) {
        password.textContent = "";

        for (let i = 0; i < passLength; i++) {
            //let random = Math.random() * (maxChar1 - minChar1) + minChar1;
            //console.log(arr.length);
            let random = Math.floor(Math.random() * (arr.length));
            let lower = Math.round(Math.random() + 1 );
            //console.log(arr[random]);

            let string = "";
            if (lower == 1) {
                string = String.fromCharCode(arr[random]);
            } else {
                string = String.fromCharCode(arr[random]).toLowerCase();
            }

            password.append(`${string}`);
        }
    } else {
        alert("Enter a length between 5 and 999");
    }
})

copy.addEventListener("click", (e) => {
    let copiedText = document.querySelector("div.output").innerText;
    navigator.clipboard.writeText(copiedText);
    alert('Password copied to clipboard');
})
