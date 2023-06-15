const os = require("os");

function total_memory() {
  const totalMemory = os.totalmem() / 1024 / 1024 / 1024;
  return `Total Memory: ${totalMemory.toFixed(2)} GBs`;
}

function free_memory() {
  const freeMemory = os.freemem() / 1024 / 1024 / 1024;
  return `Free Memory: ${freeMemory.toFixed(2)} GBs`;
}

function displayDataMemory() {
  let freeMemory = free_memory();
  let totalMemory = total_memory();

  console.log(`${freeMemory} / ${totalMemory}`);
}

setInterval(displayDataMemory, 1000);
