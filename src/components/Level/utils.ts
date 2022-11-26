	export const randomAnimal = () => {
		const animals = [
			'🐶',
			'🐱',
			'🐭',
			'🐹',
			'🐰',
			'🦊',
			'🐻',
			'🐼',
			'🐨',
			'🐯',
			'🦁',
			'🐮',
			'🐷',
		];
		const randomIndex = Math.floor(Math.random() * animals.length);
		return animals[randomIndex];
	};