import data from '/scripts/data.js';

const themeOption = document.getElementById('theme-option');

const updateTheme = () => {
	if (data.darkTheme) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
};
updateTheme();

themeOption.addEventListener('click', event => {
	event.preventDefault();

	data.darkTheme = !data.darkTheme;
	data.save();

	updateTheme();
});