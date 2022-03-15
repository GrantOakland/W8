export default class Height {
	constructor(value) {
		this.setValue(value);
	}

	setValue(value) {
		this.value = value;
	}

	setFeetAndInches(feet, inches) {
		this.setValue(12 * feet + inches);
	}

	getFeet() {
		if (this.value === undefined) {
			return undefined;
		}

		return Math.floor(this.value / 12);
	}

	getInches() {
		if (this.value === undefined) {
			return undefined;
		}

		return this.value % 12;
	}

	toJSON() {
		return this.value;
	}
}