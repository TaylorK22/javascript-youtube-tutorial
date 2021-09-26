let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  Name: "Taylor",
  Chips: 145 
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $" + player.Chips;

function getrandomcard() {
  let drawnCard = Math.floor(Math.random() * 13) + 1;
  if (drawnCard === 1) {
    return 11;
  } else if (drawnCard > 10) {
    return 10;
  } else {
    return drawnCard;
  }
}
function startgame() {
  isAlive = true;
  let firstCard = getrandomcard();
  let secondCard = getrandomcard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  rendergame();
}
function rendergame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
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
}

function newcard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getrandomcard();
    cards.push(card);
    sum += card;
    rendergame();
    console.log(cards);
  }
}
