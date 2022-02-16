export let data = {};

export const load = () => {
	try {
		// data = JSON.parse(localStorage.data);
	} catch {}
};

load();

export const save = () => {
	localStorage.data = JSON.stringify(data);
};