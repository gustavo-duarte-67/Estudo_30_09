let condicional = true;

while (condicional) {
  let contador = 1;

  while (contador <= 10) {
    console.log(contador);
    contador++;
  }

  condicional = false; // Interrompe o laço externo após executar uma vez
}