import BMI from '/scripts/classes/BMI.js';
import data from '/scripts/data.js';

const bmiBox = document.getElementById('bmi-box');
const bmiValue = document.getElementById('bmi-value');

export const updateBMI = () => {
	if (data.weights.length === 0 || data.height.value === undefined) {
		bmiBox.classList.add('hidden');
	} else {
		bmiBox.classList.remove('hidden');

		bmiValue.textContent = BMI.calculate(data.height, data.weights[data.weights.length - 1]);
	}
};