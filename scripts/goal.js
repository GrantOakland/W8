import data from '/scripts/data.js';

const goalForm = document.getElementById('goal-form');
const goal = document.getElementById('goal');
const goalProgressBox = document.getElementById('goal-progress-box');
const goalProgress = document.getElementById('goal-progress');
const editGoalButton = document.getElementById('edit-goal-button');

export const updateGoal = () => {
	if (data.goal === undefined) {
		goalForm.classList.remove('hidden');
		goalProgressBox.classList.add('hidden');
	} else {
		goal.textContent = data.goal;
		goalForm.classList.add('hidden');

		if (data.weights.length === 0) {
			goalProgressBox.classList.add('hidden');
		} else {
			goalProgressBox.classList.remove('hidden');

			const progress = data.getGoalProgress();
			const progressPercentage = `${Math.floor(progress * 1000) / 10}%`;
			goalProgress.textContent = progressPercentage;
			goalProgress.style.width = progressPercentage;
		}
	}
};

goalForm.addEventListener('submit', event => {
	event.preventDefault();

	data.setGoal(+goalForm.elements.goal.value);
	data.save();

	updateGoal();
});

editGoalButton.addEventListener('click', () => {
	goalForm.classList.remove('hidden');
	goalProgressBox.classList.add('hidden');

	goalForm.elements.goal.value = data.goal;
	goalForm.elements.goal.select();
});