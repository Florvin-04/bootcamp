function runActivity() {
  const choices = prompt(`What do you want to solve? 

    (1) Triangle
    (2) Circle
    (3) Rectangle
    
    `);

  let input1;
  let input2;
  let result;
  switch (choices) {
    case "1":
      input1 = prompt("Enter the base number");
      input2 = prompt("Enter the height number");
      result = 0.5 * (Number(input1) * Number(input2));
      console.log(` Users Input: 
      base = ${input1}
      height = ${input2}
      
      The area of the Triangle is ${result}`);
      break;

    case "2":
      input1 = prompt("Enter the radius number");
      result = 3.1416 * Number(input1) ** 2;
      console.log(` Users Input: 
      radius = ${input1}
      
      The area of the Circle is ${result}`);
      break;

    case "3":
      input1 = prompt("Enter the length number");
      input2 = prompt("Enter the width number");
      result = Number(input1) * Number(input2);
      console.log(` Users Input: 
      lenght = ${input1}
      width = ${input2}
      
      The area of the Rectangle is ${result}`);
      break;

    default:
      console.error(`'${choices}' is not in the option`);
  }
}

if (true) {
  console.log("asd");
}
if (false) {
}
