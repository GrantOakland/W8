import UserData from "/scripts/classes/UserData.js";

const data = new UserData();

export default data;

const resetDataOption = document.getElementById('reset-data-option');
const exportDataOption = document.getElementById('export-data-option');
const importDataOption = document.getElementById('import-data-option');

resetDataOption.addEventListener('click', () => {
	if (!confirm('Are you sure you want to reset all your data?\n\nThis cannot be undone.')) {
		return;
	}

	data.reset();
});

exportDataOption.addEventListener('click', () => {
	const a = document.createElement('a');
	const blob = new Blob([JSON.stringify(data)], {
		type: 'application/json'
	});
	a.href = URL.createObjectURL(blob);
	a.download = 'w8.json';
	a.click();
});

const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'application/json';

importDataOption.addEventListener('click', () => {
	fileInput.click();
});

fileInput.addEventListener('change', () => {
	const reader = new FileReader();

	reader.addEventListener('load', () => {
		try {
			JSON.parse(reader.result);
		} catch {
			alert('An error occurred while importing.');
		}

		localStorage.data = reader.result;
		alert('Data imported successfully!');
		location.reload();
	});

	reader.readAsText(fileInput.files[0]);
});