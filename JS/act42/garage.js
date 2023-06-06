function runActivity() {
  class Car {
    constructor(name, manufacturer, acceleration) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.acceleration = acceleration;
      this.speed = 0;
      this.accelerated = false;
    }

    start() {
      if (this.accelerated == false) {
        this.speed = 30;

        this.accelerated = true;

        console.log(`
        car has been started
        car initiall speed: ${this.speed}`);
        return;
      }

      console.log(`Car already started`);
    }

    accelerate() {
      if (this.accelerated == true) {
        this.speed += this.acceleration;
        console.log(`Car new speed: ${this.speed}`);
        return;
      }

      console.log("Car not started yet");
    }

    decelerate() {
      if (this.accelerated == true) {
        this.speed /= 2;

        if (this.speed < 1) {
          this.speed = 1;
        }
        console.log(`Car new speed: ${this.speed}`);
        return;
      }

      console.log("Car not started yet");
    }

    checkSpeed() {
      console.log(`Car current Speed: ${this.speed}`);
    }

    stop() {
      if (this.accelerated == true) {
        this.speed = 0;
        this.accelerated = false;
        console.log(`
        car stop!
        set speed to ${this.speed}`);
        return;
      }

      console.log("Car not started yet");
    }
  }

  let carName, carManu, carAcceleration;

  do {
    carName = prompt("What is the name of the car?").trim();
    carManu = prompt("Who is the manufacturer of the car?").trim();
    carAcceleration = Number(prompt("What is the acceleration of the car?"));

    if (carName === "") {
      console.error("Invalid car name. Please provide valid information.");
    }

    if (carManu === "") {
      console.error("Invalid manufacturer. Please provide valid information.");
    }

    if (carAcceleration <= 0) {
      console.error("Invalid acceleration. Please provide valid information.");
    }
  } while (carName === "" || carManu === "" || carAcceleration <= 0);

  let car2 = new Car(carName, carManu, carAcceleration);

  console.log(`
  
Your car's name ${car2.name}
Your car's manufacturer ${car2.manufacturer}
Your car's accelaration ${car2.acceleration}
  
  `);

  do {
    let option = prompt(`
          (1) start
          (2) accelerate
          (3) decelerate
          (4) check speed
          (5) stop
          (6) end program`);

    if (option == "1") {
      car2.start();
    } else if (option == "2") {
      car2.accelerate();
    } else if (option == "3") {
      car2.decelerate();
    } else if (option == "4") {
      car2.checkSpeed();
    } else if (option == "5") {
      car2.stop();
    } else if (option == "6") {
      break;
    }
  } while (true);

  //   let car1 = new Car("Mustang", "Ford", 10, 0);

  //   car1.start();
  //   car1.accelerate();
  //   car1.checkSpeed();
  //   car1.decelerate();
  //   car1.accelerate();
  //   car1.accelerate();
  //   car1.accelerate();
  //   car1.stop();
  //   car1.checkSpeed();
}
