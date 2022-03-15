import data from '/scripts/data.js';

const heightForm = document.getElementById('height-form');

const updateHeightForm = () => {
	if (data.height.value === undefined) {
		heightForm.classList.remove('hidden');
	} else {
		heightForm.classList.add('hidden');
	}
};
updateHeightForm();

heightForm.addEventListener('submit', event => {
	event.preventDefault();

	data.height.setFeetAndInches(+heightForm.elements.feet.value, +heightForm.elements.inches.value);
	data.save();

	updateHeightForm();
});

const editHeightOption = document.getElementById('edit-height-option');

editHeightOption.addEventListener('click', event => {
	event.preventDefault();

	heightForm.elements.feet.value = data.height.getFeet();
	heightForm.elements.inches.value = data.height.getInches();
	heightForm.classList.remove('hidden');
	heightForm.elements.feet.select();
});