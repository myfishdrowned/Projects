const display = document.querySelector('#display')
// const operator = document.getElementsByClassName('operator')

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = '';
}

function calculate(input) {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}