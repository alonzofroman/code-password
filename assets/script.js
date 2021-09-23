
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789"
var specialChars = "!@#$%^&*()~?<>|\}]{[+=_-"

function generate () {
    let length = prompt("How many characters? (Between 8 and 128)", "Please write in integers (ex. 16).");
    if (length < 8 || length > 128) {
        window.alert("Please enter a number within 8 and 128.");
    return; }
    else if (isNaN(length)) {
        window.alert("Please enter a number");
        return; }
    
    
    
    }
    

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
    
    

