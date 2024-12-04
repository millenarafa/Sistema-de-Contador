// script.js
document.addEventListener('DOMContentLoaded', () => {
  const counterDisplay = document.getElementById('counterDisplay');
  const incrementBtn = document.getElementById('incrementBtn');
  const decrementBtn = document.getElementById('decrementBtn');
  const resetBtn = document.getElementById('resetBtn');

  let counter = 0;

  // Incrementar o contador
  incrementBtn.addEventListener('click', () => {
    counter++;
    updateDisplay();
  });

  // Decrementar o contador
  decrementBtn.addEventListener('click', () => {
    counter--;
    updateDisplay();
  });

  // Resetar o contador
  resetBtn.addEventListener('click', () => {
    counter = 0;
    updateDisplay();
  });

  // Atualizar a exibição do contador
  function updateDisplay() {
    counterDisplay.textContent = counter;
  }
});
