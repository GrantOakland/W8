import data from '/scripts/data.js';
import { updateWeight } from '/scripts/currentWeight.js';

const defaultView = document.getElementById('default-view');
const weightHistoryView = document.getElementById('weight-history-view');
const weightHistoryOption = document.getElementById('weight-history-option');
const defaultViewButton = document.getElementById('default-view-button');
const weightHistoryBox = document.getElementById('weight-history-box');
const emptyWeightHistoryBox = document.getElementById('empty-weight-history-box');

const updateWeightHistory = () => {
	if (data.weights.length === 0) {
		weightHistoryBox.classList.add('hidden');
		emptyWeightHistoryBox.classList.remove('hidden');
		return;
	}

	// Empty the weight history box.
	while (weightHistoryBox.lastChild) {
		weightHistoryBox.lastChild.remove();
	}

	// Fill the weight history box.
	for (let i = data.weights.length - 1; i >= 0; i--) {
		const weight = data.weights[i];
		const dateString = `${weight.date.getMonth() + 1}/${weight.date.getDate()}/${weight.date.getFullYear()}`;

		const row = document.createElement('tr');

		const valueCell = document.createElement('td');
		valueCell.textContent = `${weight.getValue()} lbs`;
		row.append(valueCell);

		const dateCell = document.createElement('td');
		dateCell.textContent = dateString;
		row.append(dateCell);

		const options = document.createElement('td');

		const editButton = document.createElement('button');
		editButton.textContent = 'Edit';
		editButton.addEventListener('click', () => {
			const value = +prompt(`Enter a new body weight for ${dateString}.`, weight.getValue());

			if (!value) {
				return;
			}

			weight.setValue(value);
			valueCell.textContent = `${value} lbs`;
			data.save();
		});
		options.append(editButton);

		options.append(' ');

		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.addEventListener('click', () => {
			if (!confirm(`Are you sure you want to delete the weight entry for ${dateString}?`)) {
				return;
			}

			data.weights.splice(i, 1);
			data.save();

			row.remove();
		});
		options.append(deleteButton);

		row.append(options);

		weightHistoryBox.append(row);
	}

	weightHistoryBox.classList.remove('hidden');
	emptyWeightHistoryBox.classList.add('hidden');
};

weightHistoryOption.addEventListener('click', event => {
	event.preventDefault();

	updateWeightHistory();

	defaultView.classList.add('hidden');
	weightHistoryView.classList.remove('hidden');
});

defaultViewButton.addEventListener('click', () => {
	updateWeight();

	defaultView.classList.remove('hidden');
	weightHistoryView.classList.add('hidden');
});