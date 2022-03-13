import { data, save } from '/scripts/data.js';

const goalForm = document.getElementById('goal-form');
const goalProgressBox = document.getElementById('goal-progress-box');
const goalProgress = document.getElementById('goal-progress');

export const updateGoal = () => {
	if (data.goal === undefined) {
		goalForm.classList.remove('hidden');
		goalProgressBox.classList.add('hidden');
	} else {
		goalForm.classList.add('hidden');

		if (data.weights.length === 0) {
			goalProgressBox.classList.add('hidden');
		} else {
			goalProgressBox.classList.remove('hidden');

			const firstWeight = data.weights[0].value;
			const weight = data.weights[data.weights.length - 1].value;

			const progress = Math.min(
				1,
				firstWeight < data.goal
					? (weight - firstWeight) / (data.goal - firstWeight)
					: (firstWeight - weight) / (firstWeight - data.goal)
			);
			const progressPercentage = `${Math.floor(progress * 1000) / 10}%`;
			goalProgress.textContent = progressPercentage;
			goalProgress.style.width = progressPercentage;
		}
	}
};
updateGoal();

goalForm.addEventListener('submit', event => {
	event.preventDefault();

	data.goal = +goalForm.elements.goal.value;
	save();

	updateGoal();
});