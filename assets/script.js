//Variables to be called upon from confirm boxes later

var characters = "";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789"
var specialChars = "!@#$%^&*()~?<>|\}]{[+=_-"

// Parent Generate function - all variables are decided in this
function generate () {

    //Decides how many characters the password will be
    let length = prompt("How many characters? (Between 8 and 128)", "Please write in integers (ex. 16).");
    if (length < 8 || length > 128) {
        window.alert("Please enter a number within 8 and 128.");
    return; }
    else if (isNaN(length)) {
        window.alert("Please enter a number");
        return; }
    

        //Decides if lowercase letters will be used
    let useLower = confirm("Use lowercase letters?");
    if (useLower) {
        characters = characters.concat(lowerChars);
    }

    // Decides if uppercase letters will be used
    let useUpper = confirm("Use uppercase letters?");
    if (useUpper) {
        characters = characters.concat(upperChars);
    }

    // Decides if numbers will be used
    let useNumbers = confirm("Use numbers?");
    if (useNumbers) {
        characters = characters.concat(numbers);
    }

    //Decides if special characters will be used
    let useSpecial = confirm("Use special characters? (ex. #$%)");
    if (useSpecial) {
        characters = characters.concat(specialChars);
    }
    
    //Generates the actual password
    let passWord = "";
    for (let i = 0; i < length; i++) {
        passWord += characters.charAt(Math.floor(Math.random() * characters.length));
    }

        console.log(passWord);

    } //Generate function end bracket
    

generate ();



// function Begin () {
//     var 
//    
//         Begin ();
// }   

// function decideLower () {
//     var lowercase = prompt("Include lowercase letters?", "Please write as yes or no.");
// }

// function decideUpper () {
//     var uppercase = prompt("Include uppercase letters?", "Please write as yes or no.");
// }

// function decideNumber () {
//     var numbers = prompt("Include numbers?", "Please write as yes or no.");
// }

// function decideSpecial () {
//     var special = prompt("Include special characters? (ex. !@#$", "Please write as yes or no.");
// }


// // var button = document.getElementsByTagName("button");  
// //   button[1].onclick = 


   
//     }
//     else decideLower () 
        
//     if (lowercase !=="yes" || lowercase !=="no") {
//             window.alert("Please write as yes or no");
//         }
//         else decideUpper ()
    
    

