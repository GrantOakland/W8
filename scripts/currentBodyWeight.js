import { data, save } from '/scripts/data.js';
import { updateGoal } from '/scripts/goalBodyWeight.js';

const weightForm = document.getElementById('weight-form');
const weightBox = document.getElementById('weight-box');
const weightValue = document.getElementById('weight-value');
const updateWeightButton = document.getElementById('update-weight-button');

const updateWeight = () => {
	if (data.weights.length === 0) {
		weightForm.classList.remove('hidden');
		weightBox.classList.add('hidden');
	} else {
		weightForm.classList.add('hidden');
		weightBox.classList.remove('hidden');

		const lastWeight = data.weights[data.weights.length - 1];
		weightValue.textContent = lastWeight.value;
	}
};
updateWeight();

const setCurrentBodyWeight = value => {
	const lastWeight = data.weights[data.weights.length - 1];
	const now = new Date();

	if (
		lastWeight
		&& lastWeight.date.getDate() === now.getDate()
		&& lastWeight.date.getMonth() === now.getMonth()
		&& lastWeight.date.getFullYear() === now.getFullYear()
	) {
		lastWeight.value = value;
	} else {
		data.weights.push({
			date: now,
			value
		});
	}

	save();
	updateWeight();
	updateGoal();
};

weightForm.addEventListener('submit', event => {
	event.preventDefault();

	setCurrentBodyWeight(+weightForm.elements.weight.value);
});

updateWeightButton.addEventListener('click', () => {
	weightForm.classList.remove('hidden');
	weightBox.classList.add('hidden');

	const lastWeight = data.weights[data.weights.length - 1];
	weightForm.elements.weight.value = lastWeight.value;
	weightForm.elements.weight.select();
});