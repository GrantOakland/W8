import BodyWeight from './BodyWeight.js';

let bodyWeight;

test('constructor', () => {
	const bodyWeightData = {
		date: 1647982866711,
		value: 120
	};

	bodyWeight = new BodyWeight(bodyWeightData);

	expect(+bodyWeight.date).toBe(bodyWeightData.date);
	expect(bodyWeight.value).toBe(bodyWeightData.value);
});

test('setDate', () => {
	const now = Date.now();

	bodyWeight.setDate(now);

	expect(+bodyWeight.date).toBe(now);
});

test('setValue', () => {
	const bodyWeightValue = 125;

	bodyWeight.setValue(bodyWeightValue);

	expect(bodyWeight.value).toBe(bodyWeightValue);
});

test('toJSON', () => {
	expect(bodyWeight.toJSON()).toEqual({
		date: +bodyWeight.date,
		value: bodyWeight.value
	});
});