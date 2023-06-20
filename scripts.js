let display = document.getElementById('screen');
let expression = "";

function cleanScreen(){
    display.value ="";
    expression ="";
}

function addNumber(number){
   display.value +=number;
}

function addOperator(operator) {
    display.value += operator;
  }
  
function calculate() {
    let result;
    try {
      result = eval(display.value);
    } catch (error) {
      result = "Error";
    }
    display.value = result;
  }
  