function getInputs() {
  return {
    input1: Number(document.getElementById('input1').value),
    input2: Number(document.getElementById('input2').value),
  };
}

function displayOutput(result) {
  document.getElementById('output').innerHTML = result;
}

function clearInputs() {
      document.getElementById('input1').value = ''
      document.getElementById('input2').value = ''
      displayOutput(0);
    }

function calculate(operation) {
  let { input1, input2 } = getInputs()
  let result;

  switch (operation) {
    case 'add':
      result = input1 + input2
      break;
    case 'subtract':
      result = input1 - input2
      break;
    case 'divide':
      result = input2 !== 0 ? input1 / input2 : 'Error';
      break;
    case 'multiply':
      result = input1 * input2
      break;
    case 'modulus':
      result = input1 % input2
      break;
    case 'squareroot':
      result = Math.sqrt(input1)
      break;
    case 'raisetopower':
      result = input1 ** input2
      break;
    default:
      result = 'Invalid Operation'
  }
  
  displayOutput(result);
}