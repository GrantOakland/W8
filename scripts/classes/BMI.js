export default class BMI {
	setWeightAndHeight(bodyWeight, height) {
		this.weight = bodyWeight;
		this.height = height;
	}

	calculate() {
		return Math.round(7030 * this.weight.getValue() / this.height.getValue() ** 2) / 10;
	}
}