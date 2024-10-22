let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let div1 = document.getElementById('output');

  function calculate(operation) {
    let ans1 = Number(input1.value);
    let ans2 = Number(input2.value);
    let result;

    switch (operation) {
      case 'add':
       result = ans1 + ans2;
      break;
      case 'subtract':
       result = ans1 - ans2;
      break;
      case 'divide':
        result = ans1 / ans2;
      break;
      case 'multiply':
       result = ans1 * ans2;
      break;
      case 'modulus':
        result = ans1 % ans2;
      break;
      case 'squareroot':
        result = Math.sqrt(ans1);
      break;
      case 'raisetopower':
        result = Math.pow(ans1, ans2);
      break;
      default:
        div1.innerHTML = "Unknown operation.";
      return;
    }
    div1.innerHTML = result;
  }

  function clearInputs() {
    input1.value = '';
    input2.value = '';
    div1.innerHTML = '';
  }
