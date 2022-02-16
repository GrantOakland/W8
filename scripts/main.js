'use strict';

import { data, save } from "/scripts/data.js";

const goalForm = document.getElementById('goal-form');
const heightForm = document.getElementById('height-form');

const updateHeightForm = () => {
	if (data.height === undefined) {
		heightForm.classList.remove('hidden');
	} else {
		heightForm.classList.add('hidden');
	}
};
updateHeightForm();

heightForm.addEventListener('submit', event => {
	event.preventDefault();

	const feet = +heightForm.elements.feet.value;
	const inches = +heightForm.elements.inches.value;
	data.height = 12 * feet + inches;
	save();

	updateHeightForm();
});

const updateGoalForm = () => {
	if (data.goal === undefined) {
		goalForm.classList.remove('hidden');
	} else {
		goalForm.classList.add('hidden');
	}
};
updateGoalForm();

goalForm.addEventListener('submit', event => {
	event.preventDefault();

	data.goal = +goalForm.elements.goal.value;
	save();

	updateGoalForm();
});