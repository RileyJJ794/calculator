var numberBtn = document.getElementsByClassName('number');
var display = document.getElementById('screen');
var operator = document.getElementsByClassName('operator');
var clearBtn = document.getElementById('AC');
var backBtn = document.getElementById('back');
var decimalBtn = document.getElementById('decimal');

var displayValue = 0;
var pendingValue;
var evalStringArray = [];

const updateDisplayValue = (clickObj) => {
    const btnText = clickObj.target.innerText;
    console.log(btnText);

    if (displayValue === 0) {
        displayValue = '';
    }

    displayValue += btnText;
    display.innerHTML = displayValue;
};

const performOperation = (clickObj) => {
    var operatorBtnValue = clickObj.target.innerText;
    console.log(operatorBtnValue + 'pressed')

    switch (operatorBtnValue) {
        case '+':
            pendingValue = displayValue;
            displayValue = 0;
            display.innerHTML = displayValue;
            evalStringArray.push(pendingValue);
            evalStringArray.push('+');
            
            break;

        case '-':
            pendingValue = displayValue;
            displayValue = 0;
            display.innerHTML = displayValue;
            evalStringArray.push(pendingValue);
            evalStringArray.push('-');
                        
            break;

        case '×':
            pendingValue = displayValue;
            displayValue = 0;
            display.innerHTML = displayValue;
            evalStringArray.push(pendingValue);
            evalStringArray.push('*');
                    
            break;

        case '÷':
            pendingValue = displayValue;
            displayValue = 0;
            display.innerHTML = displayValue;
            evalStringArray.push(pendingValue);
            evalStringArray.push('/');
                            
            break;
        
        case '=':
            evalStringArray.push(displayValue);
            var evaluation = eval(evalStringArray.join(' '));
            displayValue = evaluation + '';
            display.innerHTML = displayValue;
            evalStringArray = [];
        
            break;
        default:
            break;
    }
}


clearBtn.onclick = () => {
    displayValue = 0;
    pendingValue = '';
    evalStringArray = [];
    display.innerHTML = displayValue;
};

backBtn.onclick = () => {
    var lengthofDisplayVal = displayValue.length;
    displayValue = displayValue.slice(0, lengthofDisplayVal - 1);

    if (displayValue === '') {
        displayValue = 0;
    };

    display.innerHTML = displayValue;
};

decimalBtn.onclick = () => {
    if(!displayValue.includes('.')){
        displayValue += '.';
    };
    display.innerHTML = displayValue;
};



for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', updateDisplayValue, false);
};

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', performOperation, false);
};