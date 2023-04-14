function writeCards(names,event) {
    
    let messages = [];

    for (let i = 0; i < names.length; i++) {

    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return messages;
}

writeCards('Joe', 'birthday');
//writeCards is being called back, but is not printing out
console.log(writeCards('Joe', 'birthday'))

//since we did not assign an array to names, write cards is printing out each letter of 'Joe'
//ex 'Thank you J, for the...' 'Thank you o,..' 'Thank you e,...'

function countDown(number) {
    while (number > -1) {
        console.log(number);
        number -= 1;
    }
}

let gerbilArray = ['Phil', 'Candy', 'Bob', 'Steve'];

function gerbilCannon(gerbil, fire) {;
    let messages = [];

    for (let i = 0; i < gerbil.length; i++) {

        messages.push(`${gerbil[i]} is fired out of the cannon. It hit the sentient waffle iron ${fire} times.`);
    }
    return messages;
}

console.log(gerbilCannon(gerbilArray, 5));
// outputs gerbilArray, and 5 as arguments

function tripleTrouble(doe, rey, mii) {
    //testing loop with more than 2 parameters

    let stooges = [];

    for (let i = 0; i < doe.length; i++) {
        stooges.push(`${doe} is rocking the mike.  ${rey} is scratching the table. 
        ${mii} is breakin on the dance floor.`);
    }
    return stooges;
}