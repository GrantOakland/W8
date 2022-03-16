import UserData from "/scripts/classes/UserData.js";

const data = new UserData();

export default data;

const resetDataOption = document.getElementById('reset-data-option');

resetDataOption.addEventListener('click', () => {
	if (!confirm('Are you sure you want to reset all your data?\n\nThis cannot be undone.')) {
		return;
	}

	data.reset();
});