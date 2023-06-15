$(document).ready(function () {
  async function generateJoke(url_API) {
    // console.log(`${url_API}/asd`);/

    // res -> response
    const res = await fetch(url_API);
    const data = await res.json();

    let joke = data.joke ? data.joke : `${data.setup}<br />${data.delivery}`;

    $("[display-joke]").html(joke);

    // console.log(joke);
  }

  $("[btn-joke-generator]").click(function () {
     generateJoke("https://v2.jokeapi.dev/joke/Any?safe-mode");
  });
});
