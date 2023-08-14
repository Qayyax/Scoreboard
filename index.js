let homeScore = document.querySelector('.home-score');
let guestScore = document.querySelector('.guest-score');

// Function for buttons

function addHome(points) {
  homeScore.textContent = Number(homeScore.textContent) + points;
}

function addGuest(points) {
  guestScore.textContent = Number(guestScore.textContent) + points;
}
