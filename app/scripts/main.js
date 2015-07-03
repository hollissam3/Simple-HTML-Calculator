// Variables

var currentValue;
var num1;
var currentFunction;
var $currentValueField =  $('#currentValueField');
var $numberKey = $('#numberKeyContainer > button');
var $functionKey = $('#plusKey, #minusKey, #timesKey, #divideKey');
var $utilityKey = $('#utilityKeyContainer > button');
var $equalsKey = $('#equalsKey');

// Function to set and update current value

function updateCurrentValue(n) {
  currentValue = n;
  $currentValueField.html(n);
}

// Function to store number being worked on

function setNum1() {
  num1 = parseFloat(currentValue);
  updateCurrentValue(0);
}

// Initiating value field

updateCurrentValue(0);

// Listens for number keys to be pressed, puts number in value field

$numberKey.click(function() {
  if (currentValue === 0) {
    updateCurrentValue('');
  }
  updateCurrentValue(currentValue + $(this).html());
});

// Listens for function keys to be pressed

$functionKey.click(function() {
  setNum1();

  switch ($(this).attr('id')) {
    case 'plusKey':
      currentFunction = '+';
      break;
    case 'minusKey':
      currentFunction = '-';
      break;
    case 'timesKey':
      currentFunction = '*';
      break;
    case 'divideKey':
      currentFunction = '/';
      break;
  }
});

// Listens for utility keys and does stuff

$utilityKey.click(function() {

  switch ($(this).attr('id')) {
    case 'AC':
      updateCurrentValue(0);
      break;
    case 'DEL':
      if (currentValue === 0) {
        break;
      } else if (currentValue.length === 1) {
        updateCurrentValue(0);
        break;
      } else {
        updateCurrentValue(currentValue.slice(0, -1));
        break;
      }
    case 'pt':
      if (currentValue.includes('.') === true) {
        break;
      } else {
        updateCurrentValue(currentValue + '.');
        break;
      }
  }
});

// Listens for equals key, does math

$equalsKey.click(function() {
  switch(currentFunction) {
    case '+':
      updateCurrentValue(num1 + parseFloat(currentValue));
      break;
    case '-':
      updateCurrentValue(num1 - parseFloat(currentValue));
      break;
    case '*':
      updateCurrentValue(num1 * parseFloat(currentValue));
      break;
    case '/':
      updateCurrentValue(num1 / parseFloat(currentValue));
      break;
  }
});