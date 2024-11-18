// Add event listeners for each input, increment, and decrement button
document.querySelectorAll('.quest-item').forEach((questItem) => {
    const input = questItem.querySelector('.exercise-input');
    const incrementButton = questItem.querySelector('.increment');
    const decrementButton = questItem.querySelector('.decrement');
    const maxCount = parseInt(questItem.getAttribute('data-max'));
  
    // Increment button logic
    incrementButton.addEventListener('click', () => {
      let currentValue = parseInt(input.value) || 0;
      if (currentValue < maxCount) {
        input.value = currentValue + 1;
        updateStatus(input);
      }
    });
  
    // Decrement button logic
    decrementButton.addEventListener('click', () => {
      let currentValue = parseInt(input.value) || 0;
      if (currentValue > 0) {
        input.value = currentValue - 1;
        updateStatus(input);
      }
    });
  
    // Manual input change logic
    input.addEventListener('input', () => {
      let value = parseInt(input.value) || 0;
      if (value > maxCount) input.value = maxCount;
      if (value < 0) input.value = 0;
      updateStatus(input);
    });
  });