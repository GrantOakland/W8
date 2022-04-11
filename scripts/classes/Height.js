export default class Height {
	constructor(value) {
		this.setValue(value);
	}

	setValue(value) {
		this.value = value;
	}

	getValue() {
		return this.value;
	}

	setFeetAndInches(feet, inches) {
		this.setValue(12 * feet + inches);
	}

	getFeet() {
		if (this.getValue() === undefined) {
			return undefined;
		}

		return Math.floor(this.getValue() / 12);
	}

	getInches() {
		if (this.getValue() === undefined) {
			return undefined;
		}

		return this.getValue() % 12;
	}

	toJSON() {
		return this.getValue();
	}
}