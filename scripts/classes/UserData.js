import BodyWeight from "/scripts/classes/BodyWeight.js";
import Height from "/scripts/classes/Height.js";

export default class UserData {
	weights = [];

	constructor() {
		this.load();
	}

	setGoal(value) {
		this.goal = value;
	}

	setHeight(value) {
		this.height = new Height(value);
	}

	// Note for professor: Although this method doesn't actually have any parameters,
	// we still modeled it as accepting a `data` parameter because that representation is useful for our design.
	// In practice, the `data` parameter from our design would correspond to the `localStorage.data` value.
	load() {
		let data = {};

		try {
			data = JSON.parse(localStorage.data);
		} catch {}

		if (data.weights) {
			for (const weightData of data.weights) {
				this.weights.push(new BodyWeight(weightData));
			}
		}

		this.setHeight(data.height);
		this.setGoal(data.goal);

		this.darkTheme = !!data.darkTheme;
	}

	save() {
		localStorage.data = JSON.stringify(this);
	}

	toJSON() {
		return {
			weights: this.weights,
			height: this.height,
			goal: this.goal,
			darkTheme: this.darkTheme
		};
	}

	reset() {
		delete localStorage.data;
		location.reload();
	}

	setCurrentWeight(value) {
		const lastWeight = this.weights[this.weights.length - 1];
		const now = new Date();

		if (
			lastWeight
			&& lastWeight.date.getDate() === now.getDate()
			&& lastWeight.date.getMonth() === now.getMonth()
			&& lastWeight.date.getFullYear() === now.getFullYear()
		) {
			lastWeight.setValue(value);
		} else {
			this.weights.push(new BodyWeight({
				date: now,
				value
			}));
		}
	}

	getGoalProgress() {
		const weight = this.weights[this.weights.length - 1].getValue();

		if (this.goal === weight) {
			return 1;
		}

		const firstWeight = this.weights[0].getValue();

		return Math.min(
			1,
			firstWeight < this.goal
				? (weight - firstWeight) / (this.goal - firstWeight)
				: firstWeight > this.goal
					? (firstWeight - weight) / (firstWeight - this.goal)
					: 0
		);
	}
}