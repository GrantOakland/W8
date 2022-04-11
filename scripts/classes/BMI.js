export default class BMI {
	constructor(bodyWeight, height) {
		this.value = Math.round(7030 * bodyWeight.getValue() / height.getValue() ** 2) / 10;
	}

	getValue() {
		return this.value;
	}
}