import { data, save } from "/scripts/data.js";

const goalForm = document.getElementById('goal-form');

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