$(document).ready(function () {
  let foodTable = $("#food-table");

  const orders = [];

  // const foodPrice = {
  //   burger: 60,
  //   steak: 80,
  //   fries: 50,
  //   salad: 70,
  //   sprite: 25,
  //   "Ice Cream": 25,
  // };

  const foodStock = {
    burger: { name: "Burger", price: 60 },
    steak: { name: "Steak", price: 80 },
    fries: { name: "Fries", price: 50 },
    salad: { name: "Salad", price: 70 },
    sprite: { name: "Sprite", price: 25 },
    icecream: { name: "Ice Cream", price: 25 },
  };

  $(".btn-primary").click(function (e) {
    e.preventDefault();

    let foodChoice = $("#food-select").val();
    // if (foodChoice == "icecream") foodChoice = "Ice Cream";

    let foodAmount = Number($("#food-amount").val());
    // console.log(foodChoice);
    // console.log();

    console.log();

    let order = {
      orderFood: foodStock[`${foodChoice}`].name,
      orderPrice: foodStock[`${foodChoice}`].price * foodAmount,
      orderQuantity: foodAmount,
    };

    // console.log(order);

    orders.push(order);
    // console.log(orders);
    displayData();
  });

  function createTableRow(order) {
    let tr = $("<tr>");
    let thItem = $("<th>", {
      text: order.orderFood,
      // text: `${order.orderFood.replace(/\b\w/g, (match) => match.toUpperCase())}`,
    });
    let thQuantity = $("<th>", {
      text: order.orderQuantity,
    });
    let thPrice = $("<th>", {
      text: `₱${order.orderPrice}`,
    });

    tr.append(thItem);
    tr.append(thQuantity);
    tr.append(thPrice);
    foodTable.append(tr);
  }

  function displayData() {
    $("#food-table tr:not(:first-child)").remove();

    orders.map((order) => createTableRow(order));
  }

  //   $("#get_all").click(function () {
  //     if (this.checked) {
  //       $(".form-check-input.sauce").prop("checked", true);
  //     } else {
  //       $(".form-check-input.sauce").prop("checked", false);
  //     }

  //     // console.log(all.checked);

  //     // let sauce2 = $("#sauce2").prop("checked", true);
  //     // console.log(sauce2);
  //     // console.log(this.checked);
  //   });

  //   $("#sauce1").click(function () {
  //     let a = $("form-check-input.sauce").prop("checked");
  //     console.log(a);

  //     let b = $("#sauce3").prop("checked");
  //     console.log(b);
  //   });

  $("#get_all").on("change", function () {
    let isChecked = $(this).prop("checked");

    $(".sauce").prop("checked", isChecked);
  });

  $(".sauce").on("change", function () {
    let allChecked = true;

    // Check if all "sauce" checkboxes are checked
    $(".sauce").each(function () {
      if (!$(this).prop("checked")) {
        allChecked = false;
        return;
      }
    });

    $("#get_all").prop("checked", allChecked);
  });
});
