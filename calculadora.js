const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o primeiro número: ", (num1) => {
  rl.question("Digite o segundo número: ", (num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    console.log("Escolha a operação:");
    console.log("1 - Adição");
    console.log("2 - Subtração");
    console.log("3 - Multiplicação");
    console.log("4 - Divisão");

    rl.question("Digite o número da operação desejada: ", (opcao) => {
      switch (parseInt(opcao)) {
        case 1:
          console.log(`Resultado da adição: ${num1 + num2}`);
          break;
        case 2:
          console.log(`Resultado da subtração: ${num1 - num2}`);
          break;
        case 3:
          console.log(`Resultado da multiplicação: ${num1 * num2}`);
          break;
        case 4:
          if (num2 !== 0) {
            console.log(`Resultado da divisão: ${num1 / num2}`);
          } else {
            console.log("Erro: Não é possível dividir por zero.");
          }
          break;
        default:
          console.log("Opção inválida!");
      }
      rl.close();
    });
  });
});
