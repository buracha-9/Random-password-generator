const passwordLengthElem = document.getElementById("passwordLength");
const includeLowercaseElem = document.getElementById("includeLowercase");
const includeUppercaseElem = document.getElementById("includeUppercase");
const includeNumbersElem = document.getElementById("includeNumbers");
const includeSymbolsElem = document.getElementById("includeSymbols");
const finalResultElem = document.getElementById("finalresult");

function generatePassword() {
    const passwordLength = parseInt(passwordLengthElem.value);
    const includeLowercase = includeLowercaseElem.checked;
    const includeUppercase = includeUppercaseElem.checked;
    const includeNumbers = includeNumbersElem.checked;
    const includeSymbols = includeSymbolsElem.checked;

    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolchars = "!@#$%^&*()_+=/";

    let allowedchars = "";
    let password = "";

    allowedchars += includeLowercase ? lowercasechars : "";
    allowedchars += includeUppercase ? uppercasechars : "";
    allowedchars += includeNumbers ? numberchars : "";
    allowedchars += includeSymbols ? symbolchars : "";

    if (allowedchars.length === 0) {
        finalResultElem.textContent = "At least one set of characters needs to be selected";
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }

    finalResultElem.textContent = `Generated Password: ${password}`;
}
