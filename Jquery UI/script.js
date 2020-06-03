$(document).ready(function () {
  var numProducts = 0;

  $(".draggable").draggable({ revert: "invalid" });

  $(".droppable").droppable({
    drop: function () {
      numProducts++;
      var plural = "";
      if (numProducts > 1) {
        plural = "s";
      }

      $(".product-cart")
        .find("h3")
        .text(
          "You now have " + numProducts + " product" + plural + " in your cart."
        );
    },
  });
});
