export let data = {};

export const load = () => {
	try {
		data = JSON.parse(localStorage.data);
	} catch {}

	if (data.weights === undefined) {
		data.weights = [];
	} else {
		for (const weight of data.weights) {
			weight.date = new Date(weight.date);
		}
	}
};

load();

export const save = () => {
	localStorage.data = JSON.stringify(data);
};

const resetDataOption = document.getElementById('reset-data-option');

resetDataOption.addEventListener('click', () => {
	if (confirm('Are you sure you want to reset all your data?\n\nThis cannot be undone.')) {
		data = {};
		save();
		location.reload();
	}
});