// // Code your solutions in this file

// // The for loop

// //Practice 1
// for (let age = 30; age < 40; age ++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     //debugger;
// }

// // Using for with Arrays
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i ++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);

//         //debugger;
//     }

//     return gifts;
// }

// //While version of wrapGifts()
// function wrapGifts(gifts) {
//     let i = 0; // the initialization moves OUTSIDE the body of the loop!
//     while (i < gifts.length) {
//       console.log(`Wrapped ${gifts[i]} and added a bow!`);
//       i++; // the iteration moves INSIDE the body of the loop!
//     }
  
//     return gifts;
//   }

// wrapGifts(gifts);
// // END OF CODE-ALONG


// ASSIGNMENT
// Thank you card creator
const messageArray = []; //new array
function writeCards(namesArray, eventName){
    for (let i = 0; i < namesArray.length; i ++){
        
        // Add message to array
        messageArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    // return the array
    return messageArray;
}

// countDown
function countDown(number) {
    while (number >= 0){
        console.log(number--);
    }
}

countDown(10);


