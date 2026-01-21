// Calculator State
let displayValue = '0';
let expression = '';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;
let memory = 0;
let history = JSON.parse(localStorage.getItem('calcHistory')) || [];
let currentMode = 'basic';
let settings = JSON.parse(localStorage.getItem('calcSettings')) || {
    theme: 'dark',
    haptic: true,
    sound: false
};

// Elements
const display = document.getElementById('display');
const expressionDisplay = document.getElementById('expression');
const historyPanel = document.getElementById('historyPanel');
const settingsPanel = document.getElementById('settingsPanel');
const overlay = document.getElementById('overlay');
const memoryIndicator = document.getElementById('memoryIndicator');

// Initialize
init();

function init() {
    applySettings();
    renderButtons();
    renderHistory();
    updateMemoryIndicator();
}

function applySettings() {
    document.querySelector('.calculator-container').setAttribute('data-theme', settings.theme);
    document.getElementById('hapticToggle').checked = settings.haptic;
    document.getElementById('soundToggle').checked = settings.sound;
    updateThemeButtons();
}

function renderButtons() {
    const grid = document.getElementById('buttonsGrid');
    grid.className = currentMode === 'basic' ? 'buttons-grid basic-grid' : 'buttons-grid scientific-grid';

    if (currentMode === 'basic') {
        grid.innerHTML = `
                    <button class="btn btn-secondary" onclick="clearAll()">AC</button>
                    <button class="btn btn-secondary" onclick="toggleSign()">±</button>
                    <button class="btn btn-secondary" onclick="percentage()">%</button>
                    <button class="btn btn-operator" onclick="operation('/')">÷</button>
                    
                    <button class="btn btn-primary" onclick="appendNumber(7)">7</button>
                    <button class="btn btn-primary" onclick="appendNumber(8)">8</button>
                    <button class="btn btn-primary" onclick="appendNumber(9)">9</button>
                    <button class="btn btn-operator" onclick="operation('*')">×</button>
                    
                    <button class="btn btn-primary" onclick="appendNumber(4)">4</button>
                    <button class="btn btn-primary" onclick="appendNumber(5)">5</button>
                    <button class="btn btn-primary" onclick="appendNumber(6)">6</button>
                    <button class="btn btn-operator" onclick="operation('-')">−</button>
                    
                    <button class="btn btn-primary" onclick="appendNumber(1)">1</button>
                    <button class="btn btn-primary" onclick="appendNumber(2)">2</button>
                    <button class="btn btn-primary" onclick="appendNumber(3)">3</button>
                    <button class="btn btn-operator" onclick="operation('+')">+</button>
                    
                    <button class="btn btn-primary btn-zero" onclick="appendNumber(0)">0</button>
                    <button class="btn btn-primary" onclick="appendDecimal()">.</button>
                    <button class="btn btn-operator" onclick="calculate()">=</button>
                `;
    } else {
        grid.innerHTML = `
                    <button class="btn btn-secondary" onclick="scientificFunc('sin')">sin</button>
                    <button class="btn btn-secondary" onclick="scientificFunc('cos')">cos</button>
                    <button class="btn btn-secondary" onclick="scientificFunc('tan')">tan</button>
                    <button class="btn btn-secondary" onclick="scientificFunc('log')">log</button>
                    <button class="btn btn-secondary" onclick="scientificFunc('ln')">ln</button>
                    
                    <button class="btn btn-secondary" onclick="scientificFunc('sqrt')">√</button>
                    <button class="btn btn-secondary" onclick="scientificFunc('square')">x²</button>
                    <button class="btn btn-secondary" onclick="scientificFunc('cube')">x³</button>
                    <button class="btn btn-secondary" onclick="operation('^')">xʸ</button>
                    <button class="btn btn-secondary" onclick="insertConstant('pi')">π</button>
                    
                    <button class="btn btn-secondary" onclick="memoryRecall()">MR</button>
                    <button class="btn btn-secondary" onclick="memoryAdd()">M+</button>
                    <button class="btn btn-secondary" onclick="memorySub()">M−</button>
                    <button class="btn btn-secondary" onclick="memoryClear()">MC</button>
                    <button class="btn btn-secondary" onclick="clearAll()">AC</button>
                    
                    <button class="btn btn-primary" onclick="appendNumber(7)">7</button>
                    <button class="btn btn-primary" onclick="appendNumber(8)">8</button>
                    <button class="btn btn-primary" onclick="appendNumber(9)">9</button>
                    <button class="btn btn-operator" onclick="operation('/')">÷</button>
                    <button class="btn btn-operator" onclick="operation('*')">×</button>
                    
                    <button class="btn btn-primary" onclick="appendNumber(4)">4</button>
                    <button class="btn btn-primary" onclick="appendNumber(5)">5</button>
                    <button class="btn btn-primary" onclick="appendNumber(6)">6</button>
                    <button class="btn btn-operator" onclick="operation('-')">−</button>
                    <button class="btn btn-operator" onclick="operation('+')">+</button>
                    
                    <button class="btn btn-primary" onclick="appendNumber(1)">1</button>
                    <button class="btn btn-primary" onclick="appendNumber(2)">2</button>
                    <button class="btn btn-primary" onclick="appendNumber(3)">3</button>
                    <button class="btn btn-secondary" onclick="toggleSign()">±</button>
                    <button class="btn btn-secondary" onclick="percentage()">%</button>
                    
                    <button class="btn btn-primary" onclick="appendNumber(0)">0</button>
                    <button class="btn btn-primary" onclick="appendDecimal()">.</button>
                    <button class="btn btn-secondary" onclick="insertConstant('e')">e</button>
                    <button class="btn btn-secondary" onclick="deleteLastDigit()">⌫</button>
                    <button class="btn btn-operator" onclick="calculate()">=</button>
                `;
    }
}

function updateDisplay() {
    display.textContent = displayValue;
    expressionDisplay.textContent = expression;

    // Add error class if display shows error
    if (displayValue === 'Error') {
        display.classList.add('error');
    } else {
        display.classList.remove('error');
    }

    vibrate(10);
}

function appendNumber(number) {
    if (displayValue === 'Error') {
        clearAll();
    }

    if (waitingForSecondOperand) {
        displayValue = String(number);
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? String(number) : displayValue + String(number);
    }
    updateDisplay();
}

function appendDecimal() {
    if (displayValue === 'Error') {
        clearAll();
    }

    if (waitingForSecondOperand) {
        displayValue = '0.';
        waitingForSecondOperand = false;
    } else if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function operation(nextOperator) {
    if (displayValue === 'Error') {
        clearAll();
        return;
    }

    const inputValue = parseFloat(displayValue) || 0;

    if (firstOperand === null) {
        firstOperand = inputValue;
        expression = `${formatNumber(inputValue)} ${getOperatorSymbol(nextOperator)}`;
    } else if (operator) {
        const result = performCalculation(firstOperand, inputValue, operator);
        if (result === 'Error') {
            displayValue = 'Error';
            expression = '';
            firstOperand = null;
            operator = null;
            waitingForSecondOperand = false;
            updateDisplay();
            return;
        }
        displayValue = formatNumber(result);
        firstOperand = result;
        expression = `${formatNumber(result)} ${getOperatorSymbol(nextOperator)}`;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

function calculate() {
    if (displayValue === 'Error') {
        clearAll();
        return;
    }

    if (!operator || firstOperand === null) return;

    const inputValue = parseFloat(displayValue) || 0;
    const result = performCalculation(firstOperand, inputValue, operator);
    if (result === 'Error') {
        displayValue = 'Error';
        expression = '';
    } else {
        const fullExpression = `${expression} ${formatNumber(inputValue)} =`;
        displayValue = formatNumber(result);
        expression = '';
        addToHistory(fullExpression, result);
    }

    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
    vibrate(30);
}

function performCalculation(first, second, operator) {
    try {
        switch (operator) {
            case '+': return first + second;
            case '-': return first - second;
            case '*': return first * second;
            case '/':
                if (second === 0) return 'Error';
                return first / second;
            case '^': return Math.pow(first, second);
            default: return second;
        }
    } catch (e) {
        return 'Error';
    }
}

function scientificFunc(func) {
    if (displayValue === 'Error') {
        clearAll();
        return;
    }

    const value = parseFloat(displayValue) || 0;
    let result;

    try {
        switch (func) {
            case 'sin':
                result = Math.sin(value * Math.PI / 180);
                break;
            case 'cos':
                result = Math.cos(value * Math.PI / 180);
                break;
            case 'tan':
                // Check for undefined values (90°, 270°, etc.)
                if (Math.abs(value % 180) === 90) return 'Error';
                result = Math.tan(value * Math.PI / 180);
                break;
            case 'log':
                if (value <= 0) return 'Error';
                result = Math.log10(value);
                break;
            case 'ln':
                if (value <= 0) return 'Error';
                result = Math.log(value);
                break;
            case 'sqrt':
                if (value < 0) return 'Error';
                result = Math.sqrt(value);
                break;
            case 'square':
                result = value * value;
                break;
            case 'cube':
                result = value * value * value;
                break;
            default: return;
        }

        if (!isFinite(result)) return 'Error';

        displayValue = formatNumber(result);
        addToHistory(`${func}(${formatNumber(value)})`, result);
        updateDisplay();
    } catch (e) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function memoryRecall() {
    if (memory !== 0) {
        displayValue = formatNumber(memory);
        updateDisplay();
    }
}

function memoryAdd() {
    const currentValue = parseFloat(displayValue) || 0;
    memory += currentValue;
    updateMemoryIndicator();
    vibrate(20);
}

function memorySub() {
    const currentValue = parseFloat(displayValue) || 0;
    memory -= currentValue;
    updateMemoryIndicator();
    vibrate(20);
}

function memoryClear() {
    memory = 0;
    updateMemoryIndicator();
    vibrate(20);
}

function updateMemoryIndicator() {
    if (memory !== 0) {
        memoryIndicator.classList.add('active');
        memoryIndicator.textContent = `M: ${formatNumber(memory)}`;
    } else {
        memoryIndicator.classList.remove('active');
        memoryIndicator.textContent = 'M';
    }
}

function insertConstant(constant) {
    if (constant === 'pi') {
        displayValue = formatNumber(Math.PI);
    } else if (constant === 'e') {
        displayValue = formatNumber(Math.E);
    }
    updateDisplay();
}

function clearAll() {
    displayValue = '0';
    expression = '';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function deleteLastDigit() {
    if (displayValue === 'Error') {
        clearAll();
        return;
    }

    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}

function toggleSign() {
    if (displayValue === 'Error') {
        clearAll();
        return;
    }

    displayValue = formatNumber(-parseFloat(displayValue) || 0);
    updateDisplay();
}

function percentage() {
    if (displayValue === 'Error') {
        clearAll();
        return;
    }

    displayValue = formatNumber(parseFloat(displayValue) / 100 || 0);
    updateDisplay();
}

function addToHistory(expr, result) {
    if (result !== 'Error') {
        history.unshift({ expression: expr, result: result, timestamp: Date.now() });
        if (history.length > 50) history.pop();
        localStorage.setItem('calcHistory', JSON.stringify(history));
        renderHistory();
    }
}

function renderHistory() {
    const content = document.getElementById('historyContent');
    if (history.length === 0) {
        content.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--text-secondary);">No history yet</div>';
        return;
    }

    content.innerHTML = history.map(item => `
                <div class="history-item fade-in" onclick="loadFromHistory('${item.result}')">
                    <div class="history-expression">${item.expression}</div>
                    <div class="history-result">${formatNumber(item.result)}</div>
                </div>
            `).join('');
}

function loadFromHistory(value) {
    displayValue = formatNumber(value);
    updateDisplay();
    toggleHistory();
}

function clearHistory() {
    if (confirm('Clear all history?')) {
        history = [];
        localStorage.setItem('calcHistory', JSON.stringify(history));
        renderHistory();
    }
}

function switchMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[onclick="switchMode('${mode}')"]`).classList.add('active');
    renderButtons();
}

function toggleHistory() {
    historyPanel.classList.toggle('active');
    overlay.classList.toggle('active');
}

function toggleSettings() {
    settingsPanel.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeAll() {
    historyPanel.classList.remove('active');
    settingsPanel.classList.remove('active');
    overlay.classList.remove('active');
}

function changeTheme(theme) {
    settings.theme = theme;
    localStorage.setItem('calcSettings', JSON.stringify(settings));
    document.querySelector('.calculator-container').setAttribute('data-theme', theme);
    updateThemeButtons();
}

function updateThemeButtons() {
    document.querySelectorAll('.theme-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.theme-${settings.theme}`).classList.add('active');
}

function toggleHaptic() {
    settings.haptic = document.getElementById('hapticToggle').checked;
    localStorage.setItem('calcSettings', JSON.stringify(settings));
}

function toggleSound() {
    settings.sound = document.getElementById('soundToggle').checked;
    localStorage.setItem('calcSettings', JSON.stringify(settings));
}

function getOperatorSymbol(op) {
    const symbols = { '+': '+', '-': '−', '*': '×', '/': '÷', '^': '^' };
    return symbols[op] || op;
}

function formatNumber(num) {
    if (typeof num === 'number' && isFinite(num)) {
        // Format to avoid floating point precision issues
        const str = num.toFixed(10).replace(/\.?0+$/, '');
        return str === '' ? '0' : str;
    }
    return String(num);
}

function vibrate(duration) {
    if (settings.haptic && navigator.vibrate) {
        navigator.vibrate(duration);
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendNumber(parseInt(key));
    } else if (key === '.') {
        appendDecimal();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        operation(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearAll();
    } else if (key === '%') {
        percentage();
    } else if (key === 'Backspace') {
        deleteLastDigit();
    } else if (key === 'p' || key === 'P') {
        insertConstant('pi');
    } else if (key === 'e' || key === 'E') {
        insertConstant('e');
    }
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        toggleHistory();
    }
}
