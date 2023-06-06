function runActivity() {
  const fruits = [];
  const price = [];

  let decision = true;
  while (decision) {
    let userAskFruit = prompt("Give a fruit name.");

    let userAskPrice = Number(prompt("Give a fruit price."));
    while (userAskPrice < 0) {
      userAskPrice = Number(prompt("Wrong price input. Enter another price"));
    }

    let userDecision = prompt("Do you want another list? any key: yes, 1: No.");

    if (userAskPrice >= 0) {
      price.push(userAskPrice);
    }
    fruits.push(userAskFruit);

    if (userDecision == "1") {
      decision = false;
    }
  }

  for (let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i]} | PHP ${price[i]}`);
  }

  // let userChoseFruit = prompt(`What fruit Would you like to buy?
  //   Options
  //   ${fruits}
  //   `);

  // let fruitsInArray = false;

  // for (let i = 0; i < fruits.length; i++) {
  //   if (userChoseFruit == fruits[i]) {
  //     fruitsInArray = true;
  //     break;
  //   }
  // }

  // while (!fruitsInArray) {
  //   userChoseFruit = prompt(`'${userChoseFruit}' is not in the option. Chose another one?
  //     Options:
  //   ${fruits}
  //   `);

  //   for (let i = 0; i < fruits.length; i++) {
  //     if (userChoseFruit == fruits[i]) {
  //       fruitsInArray = true;
  //       break;
  //     }
  //   }
  // }

  let userChoseFruit;
  let fruitsInArray = false;

  do {
    userChoseFruit = prompt(`What fruit would you like to buy?\nOptions:\n${fruits}`);

    fruitsInArray = false;
    for (let i = 0; i < fruits.length; i++) {
      if (userChoseFruit === fruits[i]) {
        fruitsInArray = true;
        break;
      }
    }

    if (!fruitsInArray) {
      while (!fruitsInArray) {
        userChoseFruit = prompt(
          `'${userChoseFruit}' is not in the options. Choose another one?\nOptions:\n${fruits}`
        );

        for (let i = 0; i < fruits.length; i++) {
          if (userChoseFruit === fruits[i]) {
            fruitsInArray = true;
            break;
          }
        }
      }
    }
  } while (!fruitsInArray);

  console.log(userChoseFruit);

  let fruitPrice = price[fruits.indexOf(userChoseFruit)];

  //   console.log(fruitPrice);

  let userChoseQuantity = Number(prompt(`How many would you like to buy?`));

  while (userChoseQuantity < 0) {
    userChoseQuantity = Number(prompt(`Invalid quantity, Enter another One`));
  }

  let total = fruitPrice * userChoseQuantity;

  console.log(`Your order:
      ${userChoseQuantity} ${userChoseFruit} | ${fruitPrice} PHP each.

      Total: ${total} PHP

  `);
}

// function runActivity() {
//   const fruit_names = [];
//   const fruit_prices = [];

//   do {
//     let fruit_name = prompt("Give me a fruit name [0] Stop");
//     if (fruit_name != "0") {
//       let fruit_price = Number(prompt("What is the price of 1 " + fruit_name + "?"));
//       if (fruit_price >= 0) {
//         fruit_names.push(fruit_name);
//         fruit_prices.push(fruit_price);
//       } else {
//         console.error("ERROR: Can not enter a negative price");
//       }
//     } else {
//       for (let i = 0; i < fruit_names.length; i++) {
//         console.log(fruit_names[i] + " | PHP " + fruit_prices[i]);
//       }
//       break;
//     }
//   } while (true);

//   do {
//     let choice_name = prompt("What would you like to buy? [0] Stop");
//     if (choice_name != "0") {
//       let fruit_found = false;
//       for (let i = 0; i < fruit_names.length; i++) {
//         if (fruit_names[i] == choice_name) {
//           fruit_found = true;
//           let choice_amount = Number(
//             prompt("How many of " + choice_name + " would you like to buy?")
//           );
//           if (choice_amount >= 0) {
//             let total = fruit_prices[i] * choice_amount;
//             console.log("Total price: PHP " + total);
//             break;
//           } else {
//             console.error("ERROR: Can not buy negative amount!");
//           }
//         }
//       }
//       if (fruit_found == false) {
//         console.error("ERROR: Fruit not found!");
//       }
//     } else {
//       break;
//     }
//   } while (true);
// }
