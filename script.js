// Selectors
const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');

// Initial counter value
let counterValue = 0;

// Event Listeners
increaseBtn.addEventListener('click', () => {
    counterValue++;
    updateCounterDisplay();
});

decreaseBtn.addEventListener('click', () => {
    counterValue--;
    updateCounterDisplay();
});

resetBtn.addEventListener('click', () => {
    counterValue = 0;
    updateCounterDisplay();
});

// Functions
function updateCounterDisplay() {
    counterDisplay.textContent = counterValue;
}
