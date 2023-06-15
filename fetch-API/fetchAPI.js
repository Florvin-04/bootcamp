// import fetch from "node-fetch";

getText();

async function getText() {
  let res = await fetch("https://data.binance.com/api/v3/ticker/24hr");
  let body = await res.json();

  console.log(body[0]);
}
