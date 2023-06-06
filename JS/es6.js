import { sayHi } from "./db.js";
console.log(sayHi);

// let x = [1, 2, 3, 4, 5];

// let a = x.filter((num) => num > 3);

// console.log(a);

// console.log(employee);

// let last_names = [];
// let first_names = [];
// let grades = [];

// last_names.push("Aurora");
// last_names.push("Barker");
// last_names.push("Campbell");
// last_names.push("Danao");

// first_names.push("Emily");
// first_names.push("Fantina");
// first_names.push("Gabe");
// first_names.push("Harold");

// grades.push(90);
// grades.push(85.5);
// grades.push(70);
// grades.push(95);

// function getGrade(fn, ln) {
//   for (let i = first_names.length - 1; i >= 0; i--) {
//     if (first_names[i] == fn && last_names[i] == ln) console.log(grades[i]);
//   }
// }

// getGrade("Emily", "Aurora");

// let i = 0;
// while (i == 0) {
//   let a = Number(prompt("Number"));
//   let b = Number(prompt("Number"));
//   let c = Number(prompt("Number"));

//   let result = (((0 - b) + ((b ** 2) - (4 * (a*c))))) / 2;

//     console.log(result);

//     let end = prompt("Continue?")
//     if(end == 'n') break
// }

// let choice = Number(prompt("1: Month, 2: Day"));

// if (choice == 1 || choice == 2) {
//   let num = Number(prompt("Give me a number"));
//   getData(num);
// } else {
//   console.log("Wrong Choice");
// }

// function getData(num) {
//   if (choice == 1) {
//     switch (num) {
//       case 1:
//         console.log("Jan");
//         break;
//       case 2:
//         console.log("Feb");
//         break;
//       case 3:
//         console.log("Mar");
//         break;
//       case 4:
//         console.log("Apr");
//         break;
//       case 5:
//         console.log("May");
//         break;
//       case 6:
//         console.log("Jun");
//         break;
//       case 7:
//         console.log("Jul");
//         break;
//       case 8:
//         console.log("Aug");
//         break;
//       case 9:
//         console.log("Sept");
//         break;
//       case 10:
//         console.log("Oct");
//         break;
//       case 11:
//         console.log("Nov");
//         break;
//       case 12:
//         console.log("Dec");
//         break;
//       default:
//         console.log("not a month");
//     }
//   } else if (choice == 2) {
//     switch (num) {
//       case 1:
//         console.log("Mon");
//         break;
//       case 2:
//         console.log("Teu");
//         break;
//       case 3:
//         console.log("Wed");
//         break;
//       case 4:
//         console.log("Thur");
//         break;
//       case 5:
//         console.log("Fri");
//         break;
//       case 6:
//         console.log("Sat");
//         break;
//       case 7:
//         console.log("Sun");
//         break;
//       default:
//         console.log("not a day");
//     }
//   }
// }

// let weather = Number(
//   prompt(`Weather?
// (1) sunny
// (2) cloudy
// (3) rainy
// (4)stormy`)
// );

// switch (weather) {
//   case 1:
//     console.log("You selected sunny");
//     break;
//   case 2:
//     console.log("You selected cloudy");
//     break;
//   case 3:
//     console.log("You selected rainy");
//     break;
//   case 4:
//     console.log("You selected stormy");
//     break;
//   default:
//     console.error("not in the choices");
// }

// let animalObj = [
//   {
//     animal: "dog",
//     latin_name: "canis lapus familliarisis",
//   },
//   {
//     animal: "cat",
//     latin_name: "felis catus",
//   },
//   {
//     animal: "rat",
//     latin_name: "rattus norgecus",
//   },
// ];

// let animalName = prompt("Give name");

// let latinName = animalObj.find((animals) => animals.animal == animalName);

// if (latinName) {
//   console.log(latinName.latin_name);
// } else {
//   console.error(`${animalName} is not in my kingdom`);
// }

