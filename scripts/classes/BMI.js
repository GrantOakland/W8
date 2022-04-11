export default class BMI {
	static calculate(height, bodyWeight) {
		return Math.round(7030 * bodyWeight.value / height.value ** 2) / 10;
	}
}