export function checkGuess(guess, secretNumber) {
  if (guess > secretNumber) {
    return "O número é menor!";
  } else if (guess < secretNumber) {
    return "O número é maior!";
  } else {
    return "Parabéns! Você acertou!";
  }
}
