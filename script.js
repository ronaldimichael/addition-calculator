console.log("hello world");

const operandA = document.querySelector("#container-addition_firstNumber");

const operandB = document.querySelector("#container-addition_secondNumber");

const calculateBtn = document.querySelector("button");

const result = document.querySelector(".container-result");

function sum() {
  const add =
    Number(parseInt(operandA.value)) + Number(parseInt(operandB.value));
  return add;
}

calculateBtn.addEventListener("click", () => {
  const firstNum = Number(parseInt(operandA.value));
  const secondNum = Number(parseInt(operandB.value));
  result.textContent = `The result of ${firstNum} and ${secondNum} is ${sum()}`;
});
