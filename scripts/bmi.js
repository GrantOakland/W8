import BMI from '/scripts/classes/BMI.js';
import data from '/scripts/data.js';

const bmiBox = document.getElementById('bmi-box');
const bmiValue = document.getElementById('bmi-value');

export const updateBMI = () => {
	if (data.weights.length === 0 || data.height.getValue() === undefined) {
		bmiBox.classList.add('hidden');
	} else {
		bmiBox.classList.remove('hidden');

		const bmi = new BMI();
		bmi.setWeightAndHeight(data.weights[data.weights.length - 1], data.height);
		bmiValue.textContent = bmi.calculate();
	}
};