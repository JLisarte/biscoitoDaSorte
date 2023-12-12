import { Phrases } from "./phrases.js"

const phrases = new Phrases()

const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const btnOpen = document.querySelector("#closeCookie")
const btnReset = document.querySelector("#btnReset")

btnOpen.addEventListener("click", handleClick)
btnReset.addEventListener("click", handleReset)

function handleClick() {
  toggleScreen()
  displayRandomPhrase()
}

function handleReset() {
  toggleScreen()
}

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}

function displayRandomPhrase() {
  const phrase = phrases.getRandomPhrase()
  const phraseContainer = document.querySelector(".boxMsg")
  phraseContainer.innerHTML = phrase
}
