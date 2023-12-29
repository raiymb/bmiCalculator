const handleCalculateBMI = async () => {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const units = document.getElementById('units').value;

    const formData = {
        height: height,
        weight: weight,
        age: age,
        gender: gender,
        unit: units
    };

    try {
        const response = await fetch('/calculate-bmi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to calculate BMI');
        }

        const result = await response.json();

        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = `<p>BMI Result: ${result.bmi}</p><p>Interpretation: ${result.interpretation}</p>`;
    } catch (error) {
        console.error('Error:', error);
    }
};