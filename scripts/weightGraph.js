import data from '/scripts/data.js';

export const updateWeightGraph = () => {
	JSC.Chart('weight-graph', {
		series: [{
			points: data.weights.map(weight => ({
				x: +weight.date,
				y: weight.value
			}))
		}],
		xAxis_scale_type: 'time'
	});
};