function runActivity() {
  alert("Welcome To My Store!");

  let fruits = [];
  let fruitPrices = [];
  let fruitStocks = [];

  do {
    let choice = prompt(`
        (1) Add new item
        (2) Restock
        (3) Check price
        (4) Sell
        (5) Stop`);

    if (choice == "1") {
      let fruitName = prompt("Give me a fruit").trim().toLowerCase();
      let fruitPrice = Number(prompt("Give me a price"));

      if (fruitPrice <= 0) {
        console.error("Invalid Price");
      } else {
        addItem(fruitName, fruitPrice);
      }

      console.log("add item");
    } else if (choice == "2") {
      let fruitName = prompt("Give me a fruit").trim().toLowerCase();
      let fruitStock = Number(prompt("Give me a amount"));

      if (fruitStock <= 0) {
        console.error("Invalid Amount");
      } else {
        restock(fruitName, fruitStock);
      }
    } else if (choice == "3") {
      let fruitName = prompt("Give me a fruit").trim().toLowerCase();

      if (!fruits.includes(fruitName)) {
        console.error(`'${fruitName}' hasn't been added yet previously`);
      } else {
        let fruitAmount = Number(prompt(`How many ${fruitName} you want to check the price`));
        checkPrice(fruitName, fruitAmount);
      }

      console.log("check price");
    } else if (choice == "4") {
      let fruitName = prompt("Give me a fruit").trim().toLowerCase();

      if (!fruits.includes(fruitName)) {
        console.error(`Invalid fruit name. '${fruitName}'`);
      } else {
        let fruitAmount = Number(prompt(`How many ${fruitName} you want to buy`));

        let fruitIndex = fruits.indexOf(fruitName);

        let fruitStock = fruitStocks[fruitIndex];

        if (fruitAmount <= 0 || isNaN(fruitAmount)) {
          console.error(`Invalid fruit amount. '${fruitAmount}'`);
        } else if (fruitAmount > fruitStock) {
          console.error(`We only have ${fruitStock}'`);
        } else {
          sell(fruitName, fruitAmount);
        }
      }
    } else if (choice == "5") {
      break;
    }

    let store = "";

    for (let i = 0; i < fruits.length; i++) {
      store += `${fruits[i]} | PHP ${fruitPrices[i]} | stock: ${fruitStocks[i]}\n`;
    }

    console.log(`
Available Fruits
----------------------
${store}
    `);
  } while (true);

  function addItem(itemName, itemPrice) {
    fruits.push(itemName);
    fruitPrices.push(itemPrice);
    fruitStocks.push(1);

    let lastItem = fruitStocks[fruitStocks.length - 1];

    console.log(
      `${itemName} added as item for sale. Each ${itemName} sells for ${itemPrice}. Stock set to ${lastItem}.`
    );
  }

  function restock(itemName, stockAmount) {
    if (fruits.includes(itemName)) {
      console.log("on Stock");

      let fruitIndex = fruits.indexOf(itemName);

      fruitStocks[fruitIndex] += stockAmount;

      console.log(
        `${stockAmount} stock/s has been added to ${itemName}. New stock: ${fruitStocks[fruitIndex]}`
      );
    } else {
      console.log("Item not Found!");
    }
  }

  function checkPrice(itemName, itemAmount) {
    let fruitIndex = fruits.indexOf(itemName);

    let totalAmount = fruitPrices[fruitIndex] * itemAmount;
    console.log(`
    
    ${itemAmount} of ${itemName} is worth ${totalAmount} PHP.

    `);
  }

  function sell(itemName, itemAmount) {
    let fruitIndex = fruits.indexOf(itemName);

    fruitStocks[fruitIndex] -= itemAmount;

    let totalAmount = fruitPrices[fruitIndex] * itemAmount;

    // if (fruitStocks[fruitIndex] == 0) {
    //   console.log("No Stock");

    //   fruits.splice(fruitIndex, 1);
    //   fruitPrices.splice(fruitIndex, 1);
    //   fruitStocks.splice(fruitIndex, 1);
    // }

    console.log(`
    
  You bought ${itemAmount} ${itemName} for ${totalAmount} PHP |  Apple Stock: ${fruitStocks[fruitIndex]}

  `);

    if (fruitStocks[fruitIndex] == 0) {
      console.log("No Stock");

      fruits.splice(fruitIndex, 1);
      fruitPrices.splice(fruitIndex, 1);
      fruitStocks.splice(fruitIndex, 1);
    }
  }
}
