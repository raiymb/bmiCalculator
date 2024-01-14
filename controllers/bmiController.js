const calculateBMI = (weight, height, age, gender, unit) => {
    if (age < 2 || age < 0 || height <= 0 || weight <= 0) {
        throw new Error('Invalid input. Age must be 2 or older, and height and weight must be positive.');
    }

    let bmi;

    if (unit === 'imperial') {
        weight *= 0.453592;
        height *= 0.0254;
    }

    bmi = weight / (height * height);
    bmi = parseFloat(bmi.toFixed(2));

    let interpretation;

    if (age >= 2 && age <= 20) {
        if (gender === 'male') {
            if (bmi < 15) {
                interpretation = 'Underweight (Male)';
            } else if (bmi >= 16.5 && bmi < 19) {
                interpretation = 'Normal weight (Male)';
            } else if (bmi >= 19 && bmi < 26) {
                interpretation = 'Overweight (Male)';
            } else if (bmi >= 26) {
                interpretation = 'Obese (Male)';
            }
        } else if (gender === 'female') {
            if (bmi < 15) {
                interpretation = 'Underweight (Female)';
            } else if (bmi >= 15 && bmi < 18.5) {
                interpretation = 'Normal weight (Female)';
            } else if (bmi >= 18.5 && bmi < 24.9) {
                interpretation = 'Overweight (Female)';
            } else if (bmi >= 24.9) {
                interpretation = 'Obese (Female)';
            }
        }
    } else {
        if (gender === 'male') {
            if (bmi < 18.5) {
                interpretation = 'Underweight (Male)';
            } else if (bmi >= 18.5 && bmi < 24.9) {
                interpretation = 'Normal weight (Male)';
            } else if (bmi >= 25 && bmi < 29.9) {
                interpretation = 'Overweight (Male)';
            } else if (bmi >= 30) {
                interpretation = 'Obese (Male)';
            }
        } else if (gender === 'female') {
            if (bmi < 18.5) {
                interpretation = 'Underweight (Female)';
            } else if (bmi >= 18.5 && bmi < 24.9) {
                interpretation = 'Normal weight (Female)';
            } else if (bmi >= 25 && bmi < 29.9) {
                interpretation = 'Overweight (Female)';
            } else if (bmi >= 30) {
                interpretation = 'Obese (Female)';
            }
        }
    }

    interpretation = interpretation || 'Unknown';

    return { bmi, interpretation };
};


module.exports = { calculateBMI };