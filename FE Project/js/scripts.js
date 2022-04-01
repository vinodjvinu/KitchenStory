//************* BUSINESS LOGIC *********//
function Food(food, quantity, price, totalPrice) {
  this.food = food;
  this.quantity = quantity;
  this.price = price;
  this.totalPrice = totalPrice;
}

//**************UI LOGIC *********//

$("document").ready(function() {
  
   var cartQty = 0;
  
  $("#location").click(function() {
    var location = prompt("Enter your location");
    if (location !== "" & location !=null ) {
            $("#success").show();
            $("#myLocation").text(location);
    }
  });

  $("#cleartable").click(function() {
        var tb = document.getElementById("carttable");
          while(tb.rows.length > 1) {
          tb.deleteRow(1);
        }
         cartQty = 0;
         $("#finalOrder").text(cartQty);
  });  
  
  //get quantity value
  var quantity = parseInt($("#quantity").text());
  var quantity2 = parseInt($("#quantity2").text());
  var quantity3 = parseInt($("#quantity3").text());
  var quantity4 = parseInt($("#quantity4").text());
  var quantity5 = parseInt($("#quantity5").text());
  var quantity6 = parseInt($("#quantity6").text()); 
  var quantity7 = parseInt($("#quantity7").text());
  var quantity8 = parseInt($("#quantity8").text());
  var quantity9 = parseInt($("#quantity9").text());
 

  //increment
  $("#add").click(function() {
    quantity += 1;
    $("#quantity").text(quantity);
    $("#price").text(quantity * 30);
  });
  $("#add2").click(function() {
    quantity2 += 1;
    $("#quantity2").text(quantity2);
    $("#price2").text(quantity2 * 35);
  });
  $("#add3").click(function() {
    quantity3 += 1;
    $("#quantity3").text(quantity3);
    $("#price3").text(quantity3 * 50);
  });
  $("#add4").click(function() {
    quantity4 += 1;
    $("#quantity4").text(quantity4);
    $("#price4").text(quantity4 * 20);
  });
  $("#add5").click(function() {
    quantity5 += 1;
    $("#quantity5").text(quantity5);
    $("#price5").text(quantity5 * 25);
  });
  $("#add6").click(function() {
    quantity6 += 1;
    $("#quantity6").text(quantity6);
    $("#price6").text(quantity6 * 30);
  });
  $("#add7").click(function() {
    quantity7 += 1;
    $("#quantity7").text(quantity7);
    $("#price7").text(quantity7 * 20);
  });
  $("#add8").click(function() {
    quantity8 += 1;
    $("#quantity8").text(quantity8);
    $("#price8").text(quantity8 * 15);
  });
  $("#add9").click(function() {
    quantity9 += 1;
    $("#quantity9").text(quantity9);
    $("#price9").text(quantity9 * 30);
  });
  //decrement
  $("#subtract").click(function() {
    quantity -= 1;
    if (quantity < 1) {
      return (quantity = 1);
    }
    $("#quantity").text(quantity);
    $("#price").text(quantity * 30);
  });
  $("#subtract2").click(function() {
    quantity2 -= 1;
    if (quantity2 < 1) {
      return (quantity2 = 1);
    }
    $("#quantity2").text(quantity2);
    $("#price2").text(quantity2 * 35);
  });
  $("#subtract3").click(function() {
    quantity3 -= 1;
    if (quantity3 < 1) {
      return (quantity3 = 1);
    }
    $("#quantity3").text(quantity3);
    $("#price3").text(quantity3 * 50);
  });
  $("#subtract4").click(function() {
    quantity4 -= 1;
    if (quantity4 < 1) {
      return (quantity4 = 1);
    }
    $("#quantity4").text(quantity4);
    $("#price4").text(quantity4 * 20);
  });
  $("#subtract5").click(function() {
    quantity5 -= 1;
    if (quantity5 < 1) {
      return (quantity5 = 1);
    }
    $("#quantity5").text(quantity5);
    $("#price5").text(quantity5 * 25);
  });
  $("#subtract6").click(function() {
    quantity6 -= 1;
    if (quantity6 < 1) {
      return (quantity6 = 1);
    }
    $("#quantity6").text(quantity6);
    $("#price6").text(quantity6 * 30);
  });
  $("#subtract7").click(function() {
    quantity7 -= 1;
    if (quantity7 < 1) {
      return (quantity7 = 1);
    }
    $("#quantity7").text(quantity7);
    $("#price7").text(quantity6 * 20);
  });
  $("#subtract8").click(function() {
    quantity8 -= 1;
    if (quantity8 < 1) {
      return (quantity8 = 1);
    }
    $("#quantity8").text(quantity8);
    $("#price8").text(quantity8 * 15);
  });
  $("#subtract9").click(function() {
    quantity9 -= 1;
    if (quantity9 < 1) {
      return (quantity9 = 1);
    }
    $("#quantity9").text(quantity9);
    $("#price9").text(quantity9 * 30);
  });
  
  var foodOrder3 = new Food();
  var foodOrder4 = new Food();
  var foodOrder5 = new Food();
  var foodOrder6 = new Food();
  
  $("#orderbtn").click(function() {
    //order 1
    var food1 = $("#exampleModalCenterTitle").text();
    var quantity1 = parseInt($("#quantity").text());
    var price1 = parseInt($("#price").text());
    var foodOrder1 = new Food(food1, quantity1, 30, price1);
    $("#tablehead").show();
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder1.food +
        "</td>" +
        "<td>" +
        foodOrder1.quantity +
        "</td>" +
        "<td>" +
        foodOrder1.price +
        "</td>" +
        "<td>" +
        foodOrder1.totalPrice +
        "</td>" +
        "</tr>"
    );
    cartQty = cartQty + 1;
    $("#finalOrder").text(cartQty);
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });

  $("#orderbtn2").click(function() {
    //order 2
    var food1 = $("#exampleModalCenterTitle2").text();
    var quantity1 = parseInt($("#quantity2").text());
    var price1 = parseInt($("#price2").text());
    var foodOrder1 = new Food(food1, quantity1, 35, price1);
    $("#tablehead").show();
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder1.food +
        "</td>" +
        "<td>" +
        foodOrder1.quantity +
        "</td>" +
        "<td>" +
        foodOrder1.price +
        "</td>" +
        "<td>" +
        foodOrder1.totalPrice +
        "</td>" +
        "</tr>"
    );
    cartQty = cartQty + 1;
    $("#finalOrder").text(cartQty);
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });

  $("#orderbtn3").click(function() {
    //order 3
    var food1 = $("#exampleModalCenterTitle3").text();
    var quantity1 = parseInt($("#quantity3").text());
    var price1 = parseInt($("#price3").text());
    var foodOrder1 = new Food(food1, quantity1, 50, price1);
    $("#tablehead").show();
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder1.food +
        "</td>" +
        "<td>" +
        foodOrder1.quantity +
        "</td>" +
        "<td>" +
        foodOrder1.price +
        "</td>" +
        "<td>" +
        foodOrder1.totalPrice +
        "</td>" +
        "</tr>"
    );
    cartQty = cartQty + 1;
    $("#finalOrder").text(cartQty);
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });  

  $("#orderbtn4").click(function() {
    //order 4
    var food1 = $("#exampleModalCenterTitle4").text();
    var quantity1 = parseInt($("#quantity4").text());
    var price1 = parseInt($("#price4").text());
    var foodOrder1 = new Food(food1, quantity1, 20, price1);
    $("#tablehead").show();
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder1.food +
        "</td>" +
        "<td>" +
        foodOrder1.quantity +
        "</td>" +
        "<td>" +
        foodOrder1.price +
        "</td>" +
        "<td>" +
        foodOrder1.totalPrice +
        "</td>" +
        "</tr>"
    );
    cartQty = cartQty + 1;
    $("#finalOrder").text(cartQty);
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });  

  $("#orderbtn5").click(function() {
    //order 5
    var food1 = $("#exampleModalCenterTitle5").text();
    var quantity1 = parseInt($("#quantity5").text());
    var price1 = parseInt($("#price5").text());
    var foodOrder1 = new Food(food1, quantity1, 25, price1);
    $("#tablehead").show();
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder1.food +
        "</td>" +
        "<td>" +
        foodOrder1.quantity +
        "</td>" +
        "<td>" +
        foodOrder1.price +
        "</td>" +
        "<td>" +
        foodOrder1.totalPrice +
        "</td>" +
        "</tr>"
    );
    cartQty = cartQty + 1;
    $("#finalOrder").text(cartQty);
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });  
  
  $("#orderbtn6").click(function() {
    //order 6
    var food1 = $("#exampleModalCenterTitle6").text();
    var quantity1 = parseInt($("#quantity6").text());
    var price1 = parseInt($("#price6").text());
    var foodOrder1 = new Food(food1, quantity1, 30, price1);
    $("#tablehead").show();
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder1.food +
        "</td>" +
        "<td>" +
        foodOrder1.quantity +
        "</td>" +
        "<td>" +
        foodOrder1.price +
        "</td>" +
        "<td>" +
        foodOrder1.totalPrice +
        "</td>" +
        "</tr>"
    );
    cartQty = cartQty + 1;
    $("#finalOrder").text(cartQty);
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });

  $("#orderbtn7").click(function() {
    //order 7
    var food1 = $("#exampleModalCenterTitle7").text();
    var quantity1 = parseInt($("#quantity7").text());
    var price1 = parseInt($("#price7").text());
    var foodOrder1 = new Food(food1, quantity1, 20, price1);
    $("#tablehead").show();
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder1.food +
        "</td>" +
        "<td>" +
        foodOrder1.quantity +
        "</td>" +
        "<td>" +
        foodOrder1.price +
        "</td>" +
        "<td>" +
        foodOrder1.totalPrice +
        "</td>" +
        "</tr>"
    );
    cartQty = cartQty + 1;
    $("#finalOrder").text(cartQty);
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });

  $("#orderbtn8").click(function() {
    //order 8
    var food1 = $("#exampleModalCenterTitle8").text();
    var quantity1 = parseInt($("#quantity8").text());
    var price1 = parseInt($("#price8").text());
    var foodOrder1 = new Food(food1, quantity1, 15, price1);
    $("#tablehead").show();
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder1.food +
        "</td>" +
        "<td>" +
        foodOrder1.quantity +
        "</td>" +
        "<td>" +
        foodOrder1.price +
        "</td>" +
        "<td>" +
        foodOrder1.totalPrice +
        "</td>" +
        "</tr>"
    );
    cartQty = cartQty + 1;
    $("#finalOrder").text(cartQty);
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  }); 

  $("#orderbtn9").click(function() {
    //order 9
    var food1 = $("#exampleModalCenterTitle9").text();
    var quantity1 = parseInt($("#quantity9").text());
    var price1 = parseInt($("#price9").text());
    var foodOrder1 = new Food(food1, quantity1, 30, price1);
    $("#tablehead").show();
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder1.food +
        "</td>" +
        "<td>" +
        foodOrder1.quantity +
        "</td>" +
        "<td>" +
        foodOrder1.price +
        "</td>" +
        "<td>" +
        foodOrder1.totalPrice +
        "</td>" +
        "</tr>"
    );
    cartQty = cartQty + 1;
    $("#finalOrder").text(cartQty);
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });    
 
});
