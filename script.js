let score = {
  win: 0,
  lost: 0,
  tie: 0,
  displayScore: function () {
    return `No. of matches Won: ${score.win} Lost: ${score.lost} Tie: ${score.tie}`;
  },
};
function computerMove() {
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}
function getResult(computerMove, userMove) {
  if (userMove === "Bat") {
    if (computerMove === "Bat") {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === "Ball") {
      score.win++;
      return "User has won";
    } else if (computerMove === "Stump") {
      score.lost++;
      return "Computer has won";
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Bat") {
      score.lost++;
      return "Computer has won";
    } else if (computerMove === "Ball") {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === "Stump") {
      score.win++;
      return "User has won";
    }
  } else if (userMove === "Stump") {
    if (computerMove === "Bat") {
      score.win++;
      return "User has won";
    } else if (computerMove === "Ball") {
      score.lost++;
      return "Computer has won";
    } else if (computerMove === "Stump") {
      score.tie++;
      return `It's a tie`;
    }
  }
}
function showResult(userMove, computerChoice, resultMsg) {
  alert(
    `You have chosen ${userMove}. Computer choice is ${computerChoice}.

    ${resultMsg}
    
    ${score.displayScore()}`
  );
}
