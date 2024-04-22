document.getElementById('calculateButton').addEventListener('click', function() {
  const numbersArray = [];
  const numberInputs = document.querySelectorAll('.numberInput');
  numberInputs.forEach(input => {
    numbersArray.push(Number(input.value));
  });
  const result = sum(...numbersArray);
  document.getElementById('result').textContent = `De som van de getallen is: ${result}`;
});
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
