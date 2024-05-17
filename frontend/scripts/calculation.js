document.getElementById('calculationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const response = await fetch(`http://localhost:3000/api/calculate/calculate?num1=${num1}&num2=${num2}`);
    const data = await response.json();

    const calculationResult = document.getElementById('calculationResult');
    if (response.ok) {
        calculationResult.textContent = `Result: ${data.result}`;
    } else {
        calculationResult.textContent = data.message;
    }
});
