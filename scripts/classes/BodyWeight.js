export default class BodyWeight {
	constructor(bodyWeightData) {
		this.setDate(bodyWeightData.date);
		this.setValue(bodyWeightData.value);
	}

	setDate(value) {
		this.date = new Date(value);
	}

	setValue(value) {
		this.value = value;
	}

	toJSON() {
		return {
			date: +this.date,
			value: this.value
		};
	}
}