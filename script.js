document.addEventListener('DOMContentLoaded', function () {
    const baseFontInput = document.getElementById('fbox');
    const directionSelect = document.getElementById('direction');
    const inputLabel = document.getElementById('inputLabel');
    const valueInput = document.getElementById('valuebox');
    const resultLabel = document.getElementById('resultLabel');
    const resultInput = document.getElementById('resultbox');
  
    function converter() {
      const baseFontValue = parseFloat(baseFontInput.value);
      const inputValue = parseFloat(valueInput.value);
      const direction = directionSelect.value;
  
      if (!isNaN(baseFontValue) && !isNaN(inputValue)) {
        if (direction === 'pxToRem') {
          const remValue = inputValue / baseFontValue;
          resultInput.value = remValue.toFixed(2);
          resultLabel.textContent = 'Valor em rem:';
        } else if (direction === 'remToPx') {
          const pxValue = inputValue * baseFontValue;
          resultInput.value = pxValue.toFixed(2);
          resultLabel.textContent = 'Valor em pixels:';
        }
      } else {
        resultInput.value = '';
        resultLabel.textContent = '';
      }
    }
  
    directionSelect.addEventListener('change', function () {
      if (directionSelect.value === 'pxToRem') {
        inputLabel.textContent = 'Valor em pixels:';
        resultLabel.textContent = 'Valor em rem:';
      } else if (directionSelect.value === 'remToPx') {
        inputLabel.textContent = 'Valor em rem:';
        resultLabel.textContent = 'Valor em pixels:';
      }
      converter();
    });
  
    baseFontInput.addEventListener('input', converter);
    valueInput.addEventListener('input', converter);
  });
  
