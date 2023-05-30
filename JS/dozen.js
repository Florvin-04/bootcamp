function runActivity() {
  let num = Number(prompt("Give me a number."));
  if (num == 0) console.log("Zero is neither even nor odd.");
  else if (num % 2 == 0) console.log("That number is even!");
  else console.log("That number is odd!");
}

// let num = 100;

// if (num >= 12) {
//   console.log(`${num} is atleast a dozen!`);

//   let dozens = num / 12;
//   console.log(dozens.toFixed(2));
// } else {
//   console.log(`${num} is NOT a dozen!`);
// }

{
  let x = 3;
  let y = 0;

  if (x < 4) {
    y += 1;
    if (x < 5) y += 1;
  }

  y += 1;

  console.log(`1 ${y}`);
}

{
  let x = 4;
  let Z = 5;
  let y = 0;

  if (x < 4 || Z < 8) {
    y += 1;
    if (x > 5) {
      y += 1;
    } else {
      y -= 1;
    }
  } else {
    y += 1;
  }
  y += 1;
  console.log(`2 ${y}`);
}

{
  let x = 3;
  let z = 3;
  let y = 0;

  if (x > 2 && x < 5) {
    y++;

    if (x <= 1 || z != 4) {
      y++;

      if (x != 3) {
        y++;
      } else {
        y += 5;
      }
    } else {
      y -= 5;
    }
  } else {
    y++;
  }

  if (y > 6) {
    y++;
  } else {
    y = 0;
  }

  y++;

  console.log(`3 ${y}`);
}

{
  let x = 4;
  let z = 3;
  let y = 0;
  if (x > 2 && x < 5) {
    x += 1;
    z += 1;
  }
  if (x <= 4 || y != x + z > 9 || z == 4) {
    x += 1;
    y += 1;
    z += 1;
  }

  if ((x > 4 && y < 2) || z == 4) {
    x += 1;
    y += 1;
    z += 1;
  }

  console.log(`4 ${x + z + y}`);
}

{
  let x = 4;
  let z = 3;
  let y = 0;
  if (x > 2 && x < 5) {
    if (x <= 4 || y != 0 || x + z > 9 || z == 4) {
      if ((x > 4 && y < 2) || z == 4) {
        x += 1;
        y += 1;
        z += 1;
      }
      x += 1;
      y += 1;
      z += 1;
    }
    x += 1;
    z += 1;
  }
//   console.log(x + z + y);
  console.log(`5 ${x + z + y}`);
}
