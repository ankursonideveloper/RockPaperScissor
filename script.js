let computerChoice = "";
function actiona(user, chooseValue) {
  return `${user} choose ${chooseValue}.`;
}
function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}
function mapToAction(input) {
  if (input == 1) {
    return `👊Rock`;
  } else if (input == 2) {
    return `✋Paper`;
  } else {
    return `✌️Scissor`;
  }
}
function resultDecider(userChoice, computerChoice) {
  if (userChoice === "👊Rock" && computerChoice === "✋Paper") {
    return "Computer won";
  } else if (userChoice === "👊Rock" && computerChoice === "✌️Scissor") {
    return "Hurray! You won";
  } else if (userChoice === "✋Paper" && computerChoice === "✌️Scissor") {
    return "Computer won";
  } else if (userChoice === "✋Paper" && computerChoice === "👊Rock") {
    return "Hurray! You won";
  } else if (userChoice === "✌️Scissor" && computerChoice === "👊Rock") {
    return "Computer won";
  } else if (userChoice === "✌️Scissor" && computerChoice === "✋Paper") {
    return "Hurray! You won";
  } else {
    return "It's a tie.";
  }
}
