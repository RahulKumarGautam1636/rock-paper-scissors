
var choosen = "";
var choosen2 = "";
var user_picked = "";
var list = ["rock", "paper", "scissors","rock", "paper", "scissors","rock", "paper", "scissors"];
var list2 = ["rock", "paper", "scissors", "spock", "lizard", "rock", "paper", "scissors" , "spock", "lizard"];
var paper = $(".paper");
var scissors = $(".scissors");
var rock = $(".rock");
var spock = $(".spock");
var lizard = $(".lizard");
var icons = $(".icons-container");
var picked = $(".picked-container");
var empty = $("#empty");
var pick = $("#picked");
var picked_image = $("#picked_image");
var win = $("#win");
var lose = $("#lose");
var userPicked = $("#userPicked");
var userPickedIMG = $("#userPickedIMG");
var userPickedCircle = $("#userPickedCircle");
var middleContainer = $(".middle-container");
var leftContainer = $(".left-container");
var rightContainer = $(".right-container");
var rules = $("#rules");
var rps = $("#rps");
var rulesOuterContainer = $(".rules-outer-container");
var rpslsOuterContainer = $(".rpsls-outer-container");
var rpsButton = $("#rps");
var logo = $("#logo");
var score = $("#score");

// =======================Render current score==================================
if (!localStorage.getItem("score")) {
  score.text("0");
} else {
  score.text(localStorage.getItem("score"));
}
var currentScore = localStorage.getItem("score");
// ========================Functions to detect user clicks======================
rock.click(function() {
  user_picked = "rock";
  $(".picked-outer-container").css("display", "flex");
  if (rpslsOn===true) {
    rpslsOuterContainer.css("opacity", "0");
    setTimeout(function() {updateUserPicked();playRPSLS()},750);
  } else {
    icons.css("opacity", "0");
    setTimeout(function() {updateUserPicked();updateRandomChoosen()},750);
}
})
paper.click(function() {
  user_picked = "paper";
  $(".picked-outer-container").css("display", "flex");
  if (rpslsOn===true) {
    rpslsOuterContainer.css("opacity", "0");
    setTimeout(function() {updateUserPicked();playRPSLS()},750);
  } else {
    icons.css("opacity", "0");
    setTimeout(function() {updateUserPicked();updateRandomChoosen()},750);
}
})
scissors.click(function() {
  $(".picked-outer-container").css("display", "flex");
  user_picked = "scissors";
  if (rpslsOn===true) {
    rpslsOuterContainer.css("opacity", "0");
    setTimeout(function() {updateUserPicked(); playRPSLS()},750);
  } else {
    icons.css("opacity", "0");
    setTimeout(function() {updateUserPicked();updateRandomChoosen()},750);
}
})
spock.click(function() {
  $(".picked-outer-container").css("display", "flex");
  user_picked = "spock";
  rpslsOuterContainer.css("opacity", "0");
  setTimeout(function() {updateUserPicked(); playRPSLS()},750);
})
lizard.click(function() {
  $(".picked-outer-container").css("display", "flex");
  user_picked = "lizard";
  rpslsOuterContainer.css("opacity", "0");
  setTimeout(function() {updateUserPicked(); playRPSLS()},750);
})
// ==============function to update Randomly chosen item=====================
function updateRandomChoosen() {
  choosen = list[Math.floor(Math.random()*9)];
  console.log("device "+choosen+ " triple");
  console.log("user +"+user_picked);
  icons.css("opacity", "0");
  picked.css("opacity", "1");
  picked.css("width", "40rem");
  setTimeout(function() {
    middleContainer.css("opacity", "1");
    if (choosen===user_picked) {
      lose.text("IT'S A TIE");
    } else {
      if (choosen==="rock" && user_picked==="scissors" ||
          choosen==="scissors" && user_picked==="paper" ||
          choosen==="paper" && user_picked==="rock" ) {
        lose.text("YOU LOSE");
        pick.addClass("circles");
        empty.addClass("house_picked");
        localStorage.removeItem("score");
        currentScore = 0;
        score.text(currentScore);
        pick.css("transform", "translateY(-5rem)");
        setTimeout(function() {pick.css("transform", "translateY(0)");},250);
      } else {
        lose.text("YOU WIN");
        userPicked.addClass("circles");
        userPickedCircle.addClass("house_picked");
        currentScore++;
        localStorage.setItem("score", currentScore);
        score.text(currentScore);
        userPicked.css("transform", "translateY(-5rem)");
        setTimeout(function() {userPicked.css("transform", "translateY(0)");},250);
      }
    }
    pick.addClass(choosen);
    empty.removeClass("empty-circle");

    empty.addClass("internal-circle");
    picked_image.attr("src", "images/icon-"+choosen+".svg");
  },1000);
}
// =================function to update user picked item=========================
function updateUserPicked() {
  userPicked.addClass(user_picked);
  userPickedIMG.attr("src", "images/icon-"+user_picked+".svg");
}
// =======Resets all css to starting value when play again is button pressed====
function playAgain() {
  picked.css("opacity", "0");
  setTimeout(function() {
  if (rpslsOn===false) {
    icons.css("display", "block");
    pick.removeClass(choosen);
    if (choosen===user_picked) {
      pick.removeClass(choosen);
      lose.text("");
    } else {
      if (choosen==="rock" && user_picked==="scissors" ||
          choosen==="scissors" && user_picked==="paper" ||
          choosen==="paper" && user_picked==="rock" ) {
        lose.text("");
        pick.removeClass("circles");
        empty.removeClass("house_picked");
      } else {
        lose.text("");
        userPicked.removeClass("circles");
        userPickedCircle.removeClass("house_picked");
      }
    }
    icons.css("opacity", "1");
  } else {
    rpslsOuterContainer.css("display", "flex");
    setTimeout(function() {rpslsOuterContainer.css("opacity", "1");},100);
    pick.removeClass(choosen2);
    if (choosen2===user_picked) {
      lose.text("");
    } else {
      if (choosen2==="rock" && user_picked==="scissors" ||
      choosen2==="scissors" && user_picked==="paper" ||
      choosen2==="paper" && user_picked==="rock" ||
      choosen2==="rock" && user_picked==="lizard" ||
      choosen2==="lizard" && user_picked==="spock" ||
      choosen2==="spock" && user_picked==="scissors" ||
      choosen2==="scissors" && user_picked==="lizard" ||
      choosen2==="lizard" && user_picked==="paper" ||
      choosen2==="paper" && user_picked==="spock" ||
      choosen2==="spock" && user_picked==="rock" ) {
        lose.text("");
        pick.removeClass("circles");
        empty.removeClass("house_picked");
      } else {
        lose.text("");
        userPicked.removeClass("circles");
        userPickedCircle.removeClass("house_picked");
      }
    }
  }
    userPicked.removeClass(user_picked);
    userPickedIMG.attr("src", "#");
    empty.addClass("empty-circle");
    empty.removeClass("internal-circle");
    picked_image.attr("src", "#");
    $(".picked-outer-container").css("display", "none");
  },850);
  picked.css("width", "1px");
  lose.text("");
  middleContainer.css("opacity", "0");
  }
// ===========Show the rules====================================================
  function getRules() {
    rulesOuterContainer.css("height", "55rem");
    rulesOuterContainer.css("opacity", "1");
    rulesOuterContainer.css("pointer-events", "all");
  }
// ==================hide rules=================================================
  function hideRules() {
    rulesOuterContainer.css("height", "0");
    rulesOuterContainer.css("opacity", "0");
    rulesOuterContainer.css("pointer-events", "none");
    }
// ===================turns on the RPSLS MODE===================================
  rpslsOn = false;
  function getRPSLS() {
    rpslsOn = !rpslsOn;
    picked.css("opacity", "0");
    picked.css("width", "1px");
    lose.text("");
    pick.removeClass("circles");
    empty.removeClass("house_picked");
    userPicked.removeClass("circles");
    userPickedCircle.removeClass("house_picked");
    middleContainer.css("opacity", "0");
    rpslsOuterContainer.css("display", "flex");
    if (rpslsOn===true) {
      $("#rules-image").attr("src", "images/image-rules-bonus.svg");
      $("#rules-image").css("margin-top", "0.9rem");
      console.log(rpslsOn);
      icons.css("transform", "rotate(120deg)");
      icons.css("opacity", "0");
      pick.removeClass(choosen);
      setTimeout(function() {
        $(".rpsls-container").css("transform", "rotate(0deg)");
        rpslsOuterContainer.css("opacity", "1");
        logo.attr("src", "images/logo-bonus.svg");
        rpsButton.text("RPS");
        $(".picked-outer-container").css("display", "none");
      },500);

    } else {
      $("#rules-image").attr("src", "images/image-rules.svg");
      $("#rules-image").css("margin-top", "2.5rem");
      pick.removeClass(choosen2);
      rpslsOuterContainer.css("opacity", "0");
      $(".rpsls-container").css("transform", "rotate(-120deg)");
      setTimeout(function() {
      icons.css("opacity", "1");
      icons.css("transform", "rotate(0deg)");
        rpslsOuterContainer.css("display", "none");
        logo.attr("src", "images/logo.svg");
        rpsButton.text("RPSLS");
        $(".picked-outer-container").css("display", "none");
      },500);
    }
    picked_image.attr("src", "#");
    empty.removeClass("internal-circle");
    empty.addClass("empty-circle");
    userPicked.removeClass(user_picked);
  }
// ============Render the random choosen item in RPSLS MODE=====================
  function playRPSLS() {
    choosen2 = list2[Math.floor(Math.random()*9)];
    console.log("penta");
    console.log("user_picked2"+ user_picked);
    rpslsOuterContainer.css("opacity", "0");
    picked.css("opacity", "1");
    picked.css("width", "40rem");
    setTimeout(function() {
      rpslsOuterContainer.css("display", "none");
      middleContainer.css("opacity", "1");
      if (choosen2===user_picked) {
        lose.text("IT'S A TIE");
      } else {
        if (
          choosen2==="rock" && user_picked==="scissors" ||
          choosen2==="scissors" && user_picked==="paper" ||
          choosen2==="paper" && user_picked==="rock" ||
          choosen2==="rock" && user_picked==="lizard" ||
          choosen2==="lizard" && user_picked==="spock" ||
          choosen2==="spock" && user_picked==="scissors" ||
          choosen2==="scissors" && user_picked==="lizard" ||
          choosen2==="lizard" && user_picked==="paper" ||
          choosen2==="paper" && user_picked==="spock" ||
          choosen2==="spock" && user_picked==="rock"
        ) {
          lose.text("YOU LOSE");
          pick.addClass("circles");
          empty.addClass("house_picked");
          localStorage.removeItem("score");
          currentScore = 0;
          score.text(currentScore);
          pick.css("transform", "translateY(-5rem)");
          setTimeout(function() {pick.css("transform", "translateY(0)");},250);
        } else {
          lose.text("YOU WIN");
          userPicked.addClass("circles");
          userPickedCircle.addClass("house_picked");
          currentScore++;
          localStorage.setItem("score", currentScore);
          score.text(currentScore);
          userPicked.css("transform", "translateY(-5rem)");
          setTimeout(function() {userPicked.css("transform", "translateY(0)");},250);
        }
      }
      pick.addClass(choosen2);
      empty.removeClass("empty-circle");
      empty.addClass("internal-circle");
      picked_image.attr("src", "images/icon-"+choosen2+".svg");
    },1000)
  }
// ==============Addtional moving effect========================================
  function move() {
    lose.css("opacity", "0");
    $(".play-again").css("opacity", "0");
    picked.css("width", "1px");
    setTimeout(function() {picked.css("width", "40rem");},700);
    setTimeout(function() {lose.css("opacity", "1"); $(".play-again").css("opacity", "1");},1100)
  }
