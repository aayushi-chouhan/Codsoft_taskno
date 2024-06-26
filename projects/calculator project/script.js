document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                clearCalculator();
                return;
            }

            if (value === '=') {
                if (operator && firstOperand !== '') {
                    calculate();
                    display.textContent = result;
                    firstOperand = result;
                    operator = '';
                    currentInput = '';
                }
                return;
            }

            if (button.classList.contains('operator')) {
                if (currentInput === '' && firstOperand === '') return;
                if (firstOperand === '') {
                    firstOperand = currentInput;
                } else if (currentInput !== '') {
                    calculate();
                    firstOperand = result;
                }
                operator = value;
                currentInput = '';
                return;
            }

            currentInput += value;
            display.textContent = currentInput;
        });
    });

    function calculate() {
        if (operator === '+') {
            result = parseFloat(firstOperand) + parseFloat(currentInput);
        } else if (operator === '-') {
            result = parseFloat(firstOperand) - parseFloat(currentInput);
        } else if (operator === '*') {
            result = parseFloat(firstOperand) * parseFloat(currentInput);
        } else if (operator === '/') {
            result = parseFloat(firstOperand) / parseFloat(currentInput);
        }
        result = result.toString();
        currentInput = '';
    }

    function clearCalculator() {
        currentInput = '';
        operator = '';
        firstOperand = '';
        result = '';
        display.textContent = '0';
    }
});
