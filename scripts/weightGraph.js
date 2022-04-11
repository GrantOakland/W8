import data from '/scripts/data.js';

const weightGraphBox = document.getElementById('weight-graph-box');

export const updateWeightGraph = () => {
	if (data.weights.length === 0) {
		weightGraphBox.classList.add('hidden');
	} else {
		weightGraphBox.classList.remove('hidden');

		JSC.Chart('weight-graph', {
			series: [{
				points: data.weights.map(weight => ({
					x: +weight.date,
					y: weight.getValue()
				}))
			}],
			xAxis_scale_type: 'time'
		});
	}
};