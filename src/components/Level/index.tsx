import { useEffect, useState } from 'react';
import styles from './styles';

interface IPair {
	number: number;
	name: string;
	isFlipped: boolean;
	isMatched: boolean;
}
export const Level = () => {
	const [pair, setPair] = useState<IPair>();
	const [gameCards, setGameCards] = useState<IPair[]>([]);
	const classes = styles();
	const difficulty = 2;

	const createPairs = (difficulty: number) => {
		let  pairs = [];
		for (let i = 0; i < difficulty * 2; i++) {
			pairs.push({
				name: String.fromCharCode(97 + i),
				isFlipped: false,
				isMatched: false,
			});
		}
		pairs = [...pairs, ...pairs]

		return pairs;
	};


	const handleCardClick = (index: number) => {
		const newPairs = [...gameCards];
		newPairs[index].isFlipped = !newPairs[index].isFlipped;
		setGameCards(newPairs);
	};

	useEffect(() => {
		return setGameCards(createPairs(difficulty));
	}, []);

	// console.log('gameCards', gameCards)
	return (
		<div className={classes.continer}>
			<h2 className={classes.pageTttle}> Select Difficulty </h2>
			{/* create the grid of cards as buttons for now */}
			<section className={classes.cardGrid}>
				{gameCards.map((pair) => (
					<div className={classes.card} key={pair.number}>
						<button
							className={classes.cardBtn}
							key={pair.number}
							onClick={() => handleCardClick(pair.number)}>
							{pair.name}
							{pair.isFlipped.toString()}
						</button>
					</div>
				))}
			</section>
		</div>
	);
};
