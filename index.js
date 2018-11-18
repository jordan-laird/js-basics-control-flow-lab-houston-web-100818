// Write your code in this file!
function scuberGreetingForFeet(someNumber) {
    let result;
    if (someNumber <= 400) {
        result = 'This one is on me!';
    }
    else if (someNumber >= 401 && someNumber <= 2500){
        result = 'I will gladly take your thirty bucks.'; 
    }
    else if (someNumber > 2500){
        result = 'No can do.';
    }
    return result
}

function ternaryCheckCity(destination) {
    let result;
    destination === 'NYC' ? (result = "Ok, sounds good.") : (result = "No go.");
    return result
}

function switchOnCharmFromTip(tip) {
    let response;

    switch(tip) {
        case 'generous':
            response = 'Thank you so much.';
            break;
        case 'not as generous':
            response = 'Thank you.';
            break;
        default:
            response = "Bye.";
            break;
    }
    return response;
}