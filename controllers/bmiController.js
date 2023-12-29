const calculateBMI = (weight, height, age, gender, unit) => {
    let bmi;

    if (unit === 'imperial') {
        weight *= 0.453592;
        height *= 0.0254;
    }

    bmi = weight / (height * height);
    bmi = parseFloat(bmi.toFixed(2));

    let interpretation;

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

    interpretation = interpretation || 'Unknown';

    return { bmi, interpretation };
};


module.exports = { calculateBMI };