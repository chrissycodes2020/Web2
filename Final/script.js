$(document).ready(function () {
  $("#learnMore").click(function () {
    $(".i-text").toggle();
  });

  $(".donate-button").click(function () {
    $("form").replaceWith($("#thankYou"));
  });

  $("#donationB").click(function () {
    $("#thankYou").show();
  });

  $(".donate-button").click(function () {
    $(".replace-form").show();
  });

  $("#donationB").click(function () {
    $("form").hide();
  });

  $(".donate-button").click(function () {
    $(".replace-form").removeClass("hidden-all");
  });
});
