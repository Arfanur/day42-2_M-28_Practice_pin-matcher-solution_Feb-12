function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        // console.log('four digit', pin);
        const displayPin = document.getElementById('display-pin');
        displayPin.value = pin;
    }
    else {
        // console.log('not a four digit', pin);
        return generatePin();
    }
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedPin = document.getElementById('typed-pin');

    if (isNaN(number)) {
        if (number == 'C') {
            typedPin.value = '';
        }
    }
    else {
        const previousNumber = typedPin.value;
        const newNumber = previousNumber + number;
        typedPin.value = newNumber;
    }
});

document.getElementById('submit-btn').addEventListener('click', function () {
    const verifyError = document.getElementById('verify-fail');
    const verifySuccess = document.getElementById('verify-success');

    const displayPin = document.getElementById('display-pin');
    const typedPin = document.getElementById('typed-pin');

    if (displayPin.value == typedPin.value) {
        verifyError.style.display = 'none';
        verifySuccess.style.display = 'block';
    }
    else {
        verifyError.style.display = 'block';
        verifySuccess.style.display = 'none';
    }
})
