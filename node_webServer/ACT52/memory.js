const os = require("os");

function displayTotalMemory() {
  const totalMemory = os.totalmem() / 1024 ** 3; // Convert bytes to gigabytes ~ 1GB = 1,073,741,824 bytes
  return `Total Memory: ${totalMemory.toFixed(2)} GBs`; // toFixed -> convert the decimal value to 2 numbers only
}

function displayFreeMemory() {
  const freeMemory = os.freemem() / 1024 ** 3; // Convert bytes to gigabytes ~ 1GB = 1,073,741,824 bytes
  return `Free Memory: ${freeMemory.toFixed(2)} GBs`; // toFixed -> convert the decimal value to 2 numbers only
}

function displayDataMemory() {
  let freeMemory = displayFreeMemory();
  let totalMemory = displayTotalMemory();

  console.log(`${freeMemory} / ${totalMemory}`);
}

setInterval(displayDataMemory, 1000);

// console.log((1.0921371923).toFixed(2));

// console.log(1024 ** 3);

// console.log(os.totalmem());
// console.log(os.totalmem() / 1024 ** 3);
// console.log(os.totalmem() / 1024 / 1024 / 1024);

// console.log(os.totalmem() / 1024 ** 3, os.totalmem() / 1024 / 1024 / 1024);

// console.log((67_003_324_746 / 1024 / 1024 / 1024).toFixed(2));
// console.log((67_003_324_746 / 1_073_741_824).toFixed(2));
