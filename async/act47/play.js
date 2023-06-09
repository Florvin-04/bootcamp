$(document).ready(function () {
  let health = 100;
  let sleep = 100;
  let exercise = 100;
  let subtractHealthClear;
  let subtractExcerciseClear;
  let subtractSleepClear;

  function subtractHealth() {
    health--;
    if (health <= 0) {
      // this function to stop the interval from running
      clearInterval(subtractHealthClear);
    }

    $(".bg-warning").css({
      width: `${health}%`,
    });
  }

  function subtractExcercise() {
    exercise--;

    if (health <= 0) {
      // this function to stop the interval from running
      clearInterval(subtractExcerciseClear);
    }

    $(".bg-primary").css({
      width: `${exercise}%`,
    });
  }

  function subtractSleep() {
    sleep--;

    if (health <= 0) {
      // this function to stop the interval from running
      clearInterval(subtractSleepClear);
    }

    $(".bg-success").css({
      width: `${sleep}%`,
    });
  }

  function startCountdown() {
    subtractHealthClear = setInterval(subtractHealth, 1000);
    subtractExcerciseClear = setInterval(subtractExcercise, 3000);
    subtractSleepClear = setInterval(subtractSleep, 5000);
  }

  function Stats(stats) {
    let petAct = $("[pet-activity]");

    switch (stats) {
      case "health":
        health = 100;
        exercise -= 5;

        petAct.text("Fed Pika!");

        break;
      case "sleep":
        sleep = 100;

        petAct.text("Played with Pika!");

        break;
      case "exercise":
        exercise = 100;
        petAct.text("Pika took a nap!");
        break;
    }

    startCountdown();
  }

  $("[btn-health]").click(function () {
    Stats("health");
  });

  $("[btn-exercise]").click(function () {
    Stats("exercise");
  });

  $("[btn-sleep]").click(function () {
    Stats("sleep");
  });

  startCountdown();
});
