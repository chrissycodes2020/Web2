$(document).ready(function () {
  var numProducts = 0;

  $(".draggable").draggable();

  $(".droppable").droppable({
    drop: function () {
      numProducts++;

      $(".product-cart")
        .find("h3")
        .text("You have " + numProducts + " in your cart.");
    },
  });
});
