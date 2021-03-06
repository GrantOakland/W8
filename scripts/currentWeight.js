import { updateBMI } from '/scripts/bmi.js';
import data from '/scripts/data.js';
import { updateGoal } from '/scripts/goal.js';
import { updateWeightGraph } from '/scripts/weightGraph.js';

const weightForm = document.getElementById('weight-form');
const weightBox = document.getElementById('weight-box');
const weightValue = document.getElementById('weight-value');
const updateWeightButton = document.getElementById('update-weight-button');

export const updateWeight = () => {
	if (data.weights.length === 0) {
		weightForm.classList.remove('hidden');
		weightBox.classList.add('hidden');
	} else {
		weightForm.classList.add('hidden');
		weightBox.classList.remove('hidden');

		const lastWeight = data.weights[data.weights.length - 1];
		weightValue.textContent = lastWeight.getValue();
	}

	updateGoal();
	updateWeightGraph();
	updateBMI();
};
updateWeight();

weightForm.addEventListener('submit', event => {
	event.preventDefault();

	data.setCurrentWeight(+weightForm.elements.weight.value);

	data.save();
	updateWeight();
});

updateWeightButton.addEventListener('click', () => {
	weightForm.classList.remove('hidden');
	weightBox.classList.add('hidden');

	const lastWeight = data.weights[data.weights.length - 1];
	weightForm.elements.weight.value = lastWeight.getValue();
	weightForm.elements.weight.select();
});