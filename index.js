var numberBtn = document.getElementsByClassName('number');
var display = document.getElementById('screen');
var operator = document.getElementsByClassName('operator');
var clearBtn = document.getElementById('AC');
var backBtn = document.getElementById('back');

var displayValue = 0;

const updateDisplayValue = (clickObj) => {
<<<<<<< HEAD
    const btnText = clickObj.target.innerText;
=======
    const btnText = clickObj.target.innerHTML;
>>>>>>> f645f1ba61206776a6f49a9fabbffdd5cdd20eeb
    console.log(btnText);

    if (displayValue === 0) {
        displayValue = '';
    }

    displayValue += btnText;
    display.innerHTML = displayValue;
};

clearBtn.onclick = () => {
    displayValue = 0;
    display.innerHTML = displayValue;
};

backBtn.onclick = () => {
    var lengthofDisplayVal = displayValue.length;
    console.log(displayValue.length);
<<<<<<< HEAD
    displayValue = displayValue.slice(0, lengthofDisplayVal - 1);
=======
    displayValue = displayValue.slice(0, lengthofDisplayVal - 31);
>>>>>>> f645f1ba61206776a6f49a9fabbffdd5cdd20eeb
    console.log('bakc button pressed');
    if (displayValue === '') {
        displayValue = 0;
        console.log('the if statment');
    };

    console.log(displayValue.length);

    display.innerHTML = displayValue;
};



for (var i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', updateDisplayValue, false);
};

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', performOperation, false);
};