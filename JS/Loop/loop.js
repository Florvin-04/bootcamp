function runActivity() {
  //   let x = false;
  //   let num;
  //   let choice;

  //   while (x == false) {
  //     num = Number(prompt("Give me a number."));
  //     if (num == 0) {
  //       console.log("Zero is neither even nor odd.");
  //     } else if (num % 2 == 0) {
  //       console.log("That number is even!");
  //     } else {
  //       console.log("That number is odd!");
  //     }
  //     choice = Number(prompt("Would you like to enter another number? Any key: Yes, 0: No"));
  //     if (choice == 0) {
  //       x = true;
  //     }
  //   }

  let userInput = Number(prompt("Give a number from 2 to 20"));

  if (userInput >= 2 && userInput <= 20) {
    // alert(`You will be ask by the system to input any number once`);
    // let userInputValue;

    let evenNum = 0;
    let oddNum = 0;

    let positiveNum = 0;
    let negativeNum = 0;

    let integerNum = 0;
    let deciamlNum = 0;

    for (let i = 0; i < userInput; i++) {
      let userInputValue = Number(prompt("Enter your a number"));
      //   console.log(userInputValue);

      if (userInputValue % 1 != 0) {
        deciamlNum++;
      } else {
        integerNum++;
      }

      if (userInputValue % 2 == 0 && userInputValue != 0) {
        evenNum++;
      } else {
        oddNum++;
      }

      if (userInputValue >= 0) {
        positiveNum++;
      } else {
        negativeNum++;
      }
    }
    console.log(`Number count: ${userInput}`);
    console.log(`Even numbers: ${evenNum}`);
    console.log(`Odd numbers: ${oddNum}`);
    console.log(`Positive numbers: ${positiveNum}`);
    console.log(`Negative numbers: ${negativeNum}`);
    console.log(`Decimal numbers: ${deciamlNum}`);
    console.log(`Integer numbers: ${integerNum}`);
  } else {
    console.erro("error");
  }
}

{
  //     for (let i = 0; i < 3; i++) {
  //       for (let j = 0; j <= i; j++) {
  //         if (i % 2 == 0) {
  //           console.log("Pancakes");
  //         }
  //       }
  //     }
  //   for (let i = 99; i > 0; i--) {
  //     console.log("Pancake no. " + i);
  //   }
  //   let askUser = 10;
  //   let positiveNum = 0;
  //   let negativeNum = 0;
  //   for (let i = 1; i <= askUser; i++) {
  //     if (i % 2 == 0) {
  //       positiveNum++;
  //     } else {
  //       negativeNum++;
  //     }
  //   }
  //   console.log(`Positive numbers: ${positiveNum}`);
  //   console.log(`Positive numbers: ${negativeNum}`);
  //   console.log(-1.3 % 1 !== 0);
}
