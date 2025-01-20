const passwordLength = 20;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(length, includeLowercase,
    includeUppercase, includeNumbers, includeSymbols
 ){
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "1234567890";
    const Symbols = "!#€%&/()=?`@£$§{[]}<>|.,:;*"

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowerCaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? Symbols : "";

    if(length <=0){
        return '(password length must be at least 1)'
    }
    if(allowedChars.length === 0){
        return '(At least 1 set on character needs to be selected';
    }

    for(let i = 0 ; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return  password;
 }


 
const password = generatePassword(passwordLength, 
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbols)

console.log(`Generated password: ${password}`)