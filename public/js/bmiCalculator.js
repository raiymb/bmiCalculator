const handleCalculateBMI = async () => {
    resetErrorMessages();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const units = document.getElementById('units').value;

    if (isNaN(height) || height <= 0) {
        displayErrorMessage('heightErrorMessage', 'Height must be a positive number.');
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        displayErrorMessage('weightErrorMessage', 'Weight must be a positive number.');
        return;
    }

    if (isNaN(age) || age < 2) {
        displayErrorMessage('ageErrorMessage', 'Age must be a number greater than or equal to 2.');
        return;
    }

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

function displayErrorMessage(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerHTML = `<p class="error">${errorMessage}</p>`;
}

function resetErrorMessages() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach((element) => {
        element.innerHTML = '';
    });
}