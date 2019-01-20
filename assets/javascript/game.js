// name all variables
// link JS
// explain rules
// give something to click on

// All text needs to be wrapped in this
$(document).ready(() => {

    var wins = 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);
    var red = 10;
    var blue = 10;
    var purple = 10;
    var green = 10;
    console.log(red, blue, purple, green);

    
function mainGame() {



// identifying variables

//   function pointReset() {
    //   setting the points
    var targetPoints = Math.floor((Math.random() * 102)+19);
    var currentPoints =0;

    // seting the gem values
    var red = Math.floor((Math.random() * 7)+50);
    var blue = Math.floor((Math.random() * 10)+1);
    var purple = Math.floor((Math.random() * 10)+3);
    var green = Math.floor((Math.random() * 4)+1);
    // logging to check it worked
    console.log(red, blue, purple, green);
    $("#gems").click(function (e) { 
        e.preventDefault();
        gems();
        // alert("clciked on a gem")
    });


    // changing target points
    $(".targetPoints").text(targetPoints);
    $(".currentPoints").text(currentPoints);
    // resetScore();

//   }
  




// Check if the user won or lost the game 
  function game() {
      console.log("GAME Target: "+currentPoints, targetPoints)
    if (targetPoints == currentPoints) {
        wins++;
        $("#wins").text(wins);
        alert("You win!");
        resetScore();
        currentPoints = 0;
        console.log("Current Points: "+ currentPoints);
        // console.log(red, blue, purple, green);
        // gems();
      }
    if (targetPoints < currentPoints) {
        losses++;
        $("#losses").text(losses);
        alert("You lose :(");
        resetScore();
        currentPoints = 0;
        // gems();
      }
  }

// Resets the scores of all the variable
function resetScore() {
    // console.log("TEST")
    var targetPoints = Math.floor((Math.random() * 102)+19);
    console.log("Target Points after reset: " + targetPoints);
    var currentPoints =0;
    console.log("Current Points after reset: " + currentPoints);

    $(".targetPoints").text(targetPoints);
    $(".currentPoints").text(currentPoints);


    var red = Math.floor((Math.random() * 7)+1);
    var blue = Math.floor((Math.random() * 10)+1);
    var purple = Math.floor((Math.random() * 10)+3);
    var green = Math.floor((Math.random() * 4)+1);
    console.log(red, blue, purple, green);
}



function gems() {
              //   RED GEM
$(".red-gem").click(function (e) { 
    e.preventDefault();
    console.log("Red-Gem "+red);
    $(".currentPoints").text(currentPoints+=red);
    game();
});


//   BLUE GEM
$(".blue-gem").click(function (e) { 
    e.preventDefault();
  console.log("Blue-Gem " + blue);
  $(".currentPoints").text(currentPoints+=blue);
    game();
});



//   PURPLE GEM
$(".purple-gem").click(function (e) { 
  e.preventDefault();
  console.log("Purple-Gem "+ purple);
  $(".currentPoints").text(currentPoints+=purple);
    game();
});



//   GREEN GEM
$(".green-gem").click(function (e) { 
  e.preventDefault();
  console.log("Green-Gem" + green);
  $(".currentPoints").text(currentPoints+=green);
    game();
});
}




console.log("Points: " + targetPoints);
console.log("Wins: " + wins + "\nLosses: " + losses);
console.log("-------------");

};



mainGame();


});
