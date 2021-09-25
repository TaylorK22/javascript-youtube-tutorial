let firstCard = 11;
let secondCard = 2;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
function startgame() {
  rendergame();
}
function rendergame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "You got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
}

function newcard() {
  console.log("draw a new card");
  let card = 7;
  cards.push(card)
  sum += card;
  rendergame();
  console.log(cards)
}
