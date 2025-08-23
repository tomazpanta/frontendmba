import { generateRandomNumber } from "./randomNumber.js";
import { checkGuess } from "./checkGuess.js";

import promptSync from "prompt-sync";
const prompt = promptSync();

export function startGame(maxAttempts = 5) {
  const secretNumber = generateRandomNumber(1, 100);
  let attempts = 0;
  let guessed = false;

  console.log("Bem-vindo ao Jogo de Adivinhação!");
  console.log("Tente adivinhar o número entre 1 e 100.");
  console.log(`Você tem ${maxAttempts} tentativas.`);

  while (attempts < maxAttempts && !guessed) {
    const userInput = prompt(`Tentativa ${attempts + 1}: Digite um número:`);
    const guess = Number(userInput);

    if (isNaN(guess)) {
      console.log("Por favor, digite um número válido.");
      continue;
    }

    attempts++;
    const result = checkGuess(guess, secretNumber);
    console.log(result);

    if (guess === secretNumber) {
      guessed = true;
    }
  }

  if (!guessed) {
    console.log(`Suas tentativas acabaram. O número era ${secretNumber}.`);
  }
}
