function flipCard(event) {
  const flipCardContainer = event.currentTarget.querySelector(".flip-card-container")
  flipCardContainer.classList.toggle("flip-card")
}
const card = document.querySelector(".card")
card.addEventListener("click",event=>flipCard(event))
