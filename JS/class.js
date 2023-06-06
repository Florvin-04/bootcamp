{
  const person = {
    firstName: "Florvin",
    lastName: "Bayaborda",
    fullName: function () {
      console.log(`${this["firstName"]} ${this.lastName}`);
    },
  };

  //   person.fullName?.();
  //   person.lastName();

  //   console.log(person.firstName);
}

// {
//   let LAST_NAME = "lastname";
//   let fullname = {
//     firstname: "somya",
//     [LAST_NAME]: "jain",
//   };

//   console.log(fullname?.firstname);
//   console.log(fullname);
// }

// {
//   const list = [10, 20, 30];
//   let total = 0;
//   for (const item in list) {
//     console.log(item);
//     total += list[item];
//   }
//   console.log(total);
// }

{
  var geeks = {
    name: "ABC",
    printFunc: function () {
      console.log(this.name);
    },
  };
  //   geeks.printFunc();
  //   var printFunc2 = geeks.printFunc.bind(geeks);
  //   printFunc2();

  //object geeks1
  var geeks1 = {
    name: "ABC",
    article: "C++",
  };
  //object geeks2
  var geeks2 = {
    name: "CDE",
    article: "JAVA",
  };

  //object geeks3
  var geeks3 = {
    name: "IJK",
    article: "C#",
  };

  function printVal() {
    console.log(this.name + " contributes about " + this.article);
  }

  var printFunc2 = printVal.bind(geeks1);
  //using bind()
  // bind() takes the object "geeks1" as parameter//
  //   printFunc2();

  var printFunc3 = printVal.bind(geeks2);
  //   printFunc3();

  var printFunc4 = printVal.bind(geeks3);
  //   printFunc4();
  //uniquely defines each objects
}

{
  function fxn12() {
    return "Hello";
  }

  //fxn2 recieves a function 'fxn1' as parameter
  //Therefore, fxn2 this is a higher order function
  function fxn2(fxn1) {
    console.log(fxn1(), "Geeks");
  }

  //   fxn2(fxn12);
}

{
  function fxn1() {
    return function () {
      console.log("Hello Geeks");
    };
  }

  //accepting the function returned from fxn1() and calling it.
  //   const fxn2 = fxn1();
  //   const a = fxn1();
  //   a();

  function multiplier(factor) {
    return (num) => factor * num;
  }

  let double = multiplier(3);
  double(2);

  console.log(multiplier(3)(4));
}
