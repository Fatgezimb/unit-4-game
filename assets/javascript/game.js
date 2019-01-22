// name all variables
// link JS
// explain rules
// give something to click on

// All text needs to be wrapped in this
$(document).ready(() => {
  // starting the game scores
  var wins = 0;
  var losses = 0;
  $("#wins").text(wins);
  $("#losses").text(losses);

  //   Showing the starting target points and current points
  var targetPoints = Math.floor(Math.random() * 102 + 19);
  var currentPoints = 0;
  $(".targetPoints").text(targetPoints);
  $(".currentPoints").text(currentPoints);

  //   assigning values to the gems
  var red = Math.floor(Math.random() * 7+1);
  var blue = Math.floor(Math.random() * 10 + 1);
  var purple = Math.floor(Math.random() * 10 + 3);
  var green = Math.floor(Math.random() * 4 + 1);

  // logging to check it worked
  console.log("Target -> " + targetPoints);
  console.log("Current -> " + currentPoints);


  // Check if the user won or lost the game
  function game() {
    // console.log("GAME Target: " + currentPoints, targetPoints);
    if (targetPoints == currentPoints) {
      // changing the wins
      wins++;
      $("#wins").text(wins);
      alert("You win!");
      // reset score values
      currentPoints = 0;
      targetPoints = Math.floor(Math.random() * 102 + 19);
      $(".targetPoints").text(targetPoints);
      $(".currentPoints").text(currentPoints);

      //   assigning gem values
      var red = Math.floor(Math.random() * 7+1);
      var blue = Math.floor(Math.random() * 10 + 1);
      var purple = Math.floor(Math.random() * 10 + 3);
      var green = Math.floor(Math.random() * 4 + 1);

      // Testing everything
      console.log("Target -> " + targetPoints);
      console.log("Current -> " + currentPoints);
      console.log(red, blue, purple, green);
    }
    if (targetPoints < currentPoints) {
      // changing the wins
      losses++;
      $("#losses").text(losses);
      alert("You lose!");
      // reset score values
      currentPoints = 0;
      targetPoints = Math.floor(Math.random() * 102 + 19);
      $(".targetPoints").text(targetPoints);
      $(".currentPoints").text(currentPoints);

      //   assigning gem values
      var red = Math.floor(Math.random() * 7+1);
      var blue = Math.floor(Math.random() * 10 + 1);
      var purple = Math.floor(Math.random() * 10 + 3);
      var green = Math.floor(Math.random() * 4 + 1);

      // Testing everything
      console.log("Target -> " + targetPoints);
      console.log("Current -> " + currentPoints);
      console.log(red, blue, purple, green);
    }
  }


  function gems() {
    //   RED GEM
    $(".red-gem").click(function(e) {
      e.preventDefault();
      console.log("Red-Gem: " + red);
      $(".currentPoints").text((currentPoints += red));
      game();
    });

    //   BLUE GEM
    $(".blue-gem").click(function(e) {
      e.preventDefault();
      console.log("Blue-Gem: " + blue);
      $(".currentPoints").text((currentPoints += blue));
      game();
    });

    //   PURPLE GEM
    $(".purple-gem").click(function(e) {
      e.preventDefault();
      console.log("Purple-Gem: " + purple);
      $(".currentPoints").text((currentPoints += purple));
      game();
    });

    //   GREEN GEM
    $(".green-gem").click(function(e) {
      e.preventDefault();
      console.log("Green-Gem: " + green);
      $(".currentPoints").text((currentPoints += green));
      game();
    });

    console.log(red. blue, purple, green)
  }

  gems();
});
