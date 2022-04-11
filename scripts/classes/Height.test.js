import Height from './Height.js';

let height;

test('constructor', () => {
	const heightValue = 12 * 5 + 6;

	height = new Height(heightValue);

	expect(height.getValue()).toBe(heightValue);
});

test('setValue', () => {
	const heightValue = 12 * 5 + 7;

	height.setValue(heightValue);

	expect(height.getValue()).toBe(heightValue);
});

const feet = 5;
const inches = 3;

test('setFeetAndInches', () => {
	height.setFeetAndInches(feet, inches);

	expect(height.getValue()).toBe(12 * feet + inches);
});

test('getFeet', () => {
	expect(height.getFeet()).toBe(feet);
});

test('getInches', () => {
	expect(height.getInches()).toBe(inches);
});

test('toJSON', () => {
	expect(height.toJSON()).toBe(height.getValue());
});