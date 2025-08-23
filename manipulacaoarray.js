// Criação de Arrays
let notas = [3, 8, 10, 7, 5];
console.log("Notas iniciais:", notas);

// Acesso aos Elementos
console.log("Primeira nota:", notas[0]);
console.log("Última nota:", notas[notas.length - 1]);

// Adiciona nova nota
notas.push(8);
console.log("Após adicionar nota 8:", notas);

// Remove a primeira nota
notas.shift();
console.log("Após remover a primeira nota:", notas);

// Iteração com forEach
console.log("Notas uma a uma:");
notas.forEach((nota) => console.log(nota));

// Cálculo da Média
let media = notas.reduce((acc, val) => acc + val, 0) / notas.length;
console.log("Média das notas:", media);

// Filtro de Notas > 7
let notasAltas = notas.filter((nota) => nota > 7);
console.log("Notas maiores que 7:", notasAltas);

// Ordenação crescente
let notasOrdenadas = [...notas].sort((a, b) => a - b);
console.log("Notas ordenadas:", notasOrdenadas);

// Verificar se 6.5 está presente
console.log("Nota 6.5 está presente?", notas.includes(6.5));

// Encontrar índice da nota 8
console.log("Índice da nota 8:", notas.indexOf(8));

// Mapeamento (quadrado das notas)
let notasQuadrado = notas.map((nota) => nota ** 2);
console.log("Notas ao quadrado:", notasQuadrado);
