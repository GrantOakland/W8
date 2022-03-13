import { data, save } from '/scripts/data.js';

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

const editHeightOption = document.getElementById('edit-height-option');

editHeightOption.addEventListener('click', event => {
	event.preventDefault();

	heightForm.elements.feet.value = Math.floor(data.height / 12);
	heightForm.elements.inches.value = data.height % 12;
	heightForm.classList.remove('hidden');
	heightForm.elements.feet.select();
});