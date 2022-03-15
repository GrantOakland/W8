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
	}

	save() {
		localStorage.data = JSON.stringify(this);
	}

	toJSON() {
		return {
			weights: this.weights,
			height: this.height,
			goal: this.goal
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
		const weight = this.weights[this.weights.length - 1].value;

		if (this.goal === weight) {
			return 1;
		}

		const firstWeight = this.weights[0].value;

		return Math.min(
			1,
			firstWeight < this.goal
				? (weight - firstWeight) / (this.goal - firstWeight)
				: (firstWeight - weight) / (firstWeight - this.goal)
		);
	}
}