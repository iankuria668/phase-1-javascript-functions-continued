// code your solution here
function   saturdayFun() {
let activity;
if ((activity = arguments[0]) === undefined) {
    activity = "roller-skate";
}
return `This Saturday, I want to ${activity}!`;
}

function mondayWork() {
    let activity;
    if ((activity = arguments[0]) === undefined) {
        activity = "go to the office";
    }
    return `This Monday, I will ${activity}.`;
}

const wrapAdjective = function(Flair="*"){
    return function(adjective="special"){
        return `You are ${Flair}${adjective}${Flair}!`;
    }
    return 
}
