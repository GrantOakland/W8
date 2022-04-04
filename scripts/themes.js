import data from '/scripts/data.js';

const themeOption = document.getElementById('theme-option');

themeOption.addEventListener('click', event => {
	event.preventDefault();

	data.darkTheme = !data.darkTheme;
	data.save();

	if (data.darkTheme) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
});