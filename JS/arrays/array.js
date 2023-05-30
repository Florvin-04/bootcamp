function runActivity() {

    
}

// const fishes = ["a", "b", "c"];
// console.log(fishes);
// for (let i = 0; i < fishes.length; i++) {
//   console.log(fishes[i]);
// }

// for (let index = 0; index < array.length; index++) {
//     console.log(index);

// }

// const suspects = [
//   "Alfred",
//   "Bonnie",
//   "Craig",
//   "Danny",
//   "Eric",
//   "Flint",
//   "Gayle",
//   "Heidi",
//   "Isabel",
//   "Jacobs",
// ];
// const wanted = ["Alfred", "Danny", "Jacobs"];

// for (let i = 0; i < suspects.length; i++) {
//   console.log("Checking wanted list for " + suspects[i] + "...");
//   for (let j = 0; j < wanted.length; j++) {
//     if (suspects[i] == wanted[j]) {
//       console.log("Suspect is wanted!");
//       break;
//     }
//   }
// }

// const suspects = [
//     "Alfred",
//     "Bonnie",
//     "Craig",
//     "Danny",
//     "Eric",
//     "Flint",
//     "Gayle",
//     "Heidi",
//     "Isabel",
//     "Jacobs",
//   ];
//   const wanted = ["Alfred", "Danny", "Jacobs"];
  
//   const foundSuspects = [];
  
//   for (let i = 0; i < wanted.length; i++) {
//     const currentWanted = wanted[i];
  
//     if (suspects.includes(currentWanted)) {
//       foundSuspects.push(currentWanted);
//     }
//   }
  
//   console.log(foundSuspects);


// ACT 38

// function runActivity() {
//   const fruits = [];
//   const price = [];

//   let decision = true;
//   while (decision) {
//     let userAskFruit = prompt("Give a fruit name.");

//     let userAskPrice = Number(prompt("Give a fruit price."));
//     while (userAskPrice < 0) {
//       userAskPrice = Number(prompt("Wrong price input. Enter another price"));
//     }

//     let userDecision = prompt("Do you want another list? any key: yes, 1: No.");

//     if (userAskPrice >= 0) {
//       price.push(userAskPrice);
//     }
//     fruits.push(userAskFruit);

//     if (userDecision == "1") {
//       decision = false;
//     }
//   }

//   for (let i = 0; i < fruits.length; i++) {
//     console.log(`${fruits[i]} | PHP ${price[i]}`);
//   }

//   let isOrderAgain = false;

//   while (!isOrderAgain) {
//     let userChoseFruit = prompt(`What fruit Would you like to buy?
//     ${fruits}
//     `);

//     let fruitsInArray = false;

//     for (let i = 0; i < fruits.length; i++) {
//       if (userChoseFruit == fruits[i]) {
//         fruitsInArray = true;
//         break;
//       }
//     }

//     while (!fruitsInArray) {
//       userChoseFruit = prompt(`'${userChoseFruit}' is not in the option. Chose another one?
//       Options:
//     ${fruits}
//     `);

//       for (let i = 0; i < fruits.length; i++) {
//         if (userChoseFruit == fruits[i]) {
//           fruitsInArray = true;
//           break;
//         }
//       }
//     }

//     let fruitPrice = price[fruits.indexOf(userChoseFruit)];

//     //   console.log(fruitPrice);

//     let userChoseQuantity = Number(prompt(`How many would you like to buy?`));

//     while (userChoseQuantity < 0) {
//       userChoseQuantity = Number(prompt(`Invalid quantity, Enter another One`));
//     }

//     let total = fruitPrice * userChoseQuantity;

//     console.log(`Your order:
//     ${userChoseQuantity} ${userChoseFruit} | ${fruitPrice} PHP each.

//     Total: ${total} PHP

//     `);

//     let again = prompt("Would you like to order again?");

//     if (again == "No") {
//       isOrderAgain = true;
//     }
//   }
// }