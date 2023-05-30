function runActivity() {
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
      let ordinalSuffix;
      let add = i + 1;
      if (add === 1) {
        ordinalSuffix = "st";
      } else if (add === 2) {
        ordinalSuffix = "nd";
      } else if (add === 3) {
        ordinalSuffix = "rd";
      } else {
        ordinalSuffix = "th";
      }

      let userInputValue = Number(prompt(`Enter your ${i + 1}${ordinalSuffix} number`));
      //   console.log(userInputValue);

      if (userInputValue % 1 != 0) {
        deciamlNum++;
      } else {
        integerNum++;
      }

      if (userInputValue != 0) {
        if (userInputValue % 2 == 0) {
          evenNum++;
        } else {
          oddNum++;
        }

        if (userInputValue > 0) {
          positiveNum++;
        } else {
          negativeNum++;
        }
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
    console.error(`${userInput} is not in between 2 and 20`);
  }
}
