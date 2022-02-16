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

	data.height = +heightForm.elements.height.value;
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