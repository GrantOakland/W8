export let data = {};

export const load = () => {
	try {
		// data = JSON.parse(localStorage.data);
	} catch {}

	if (data.weights === undefined) {
		data.weights = [];
	}
};

load();

export const save = () => {
	localStorage.data = JSON.stringify(data);
};