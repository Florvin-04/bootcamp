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

  let userChoseFruit = prompt(`What fruit Would you like to buy?
    Options
    ${fruits}
    `);

  let fruitsInArray = false;

  for (let i = 0; i < fruits.length; i++) {
    if (userChoseFruit == fruits[i]) {
      fruitsInArray = true;
      break;
    }
  }

  while (!fruitsInArray) {
    userChoseFruit = prompt(`'${userChoseFruit}' is not in the option. Chose another one?
      Options:
    ${fruits}
    `);

    for (let i = 0; i < fruits.length; i++) {
      if (userChoseFruit == fruits[i]) {
        fruitsInArray = true;
        break;
      }
    }
  }

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
