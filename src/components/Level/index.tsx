import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { randomAnimal } from './utils';

import styles from './styles';

interface IPair {
	number: number;
	name: string;
	isFlipped: boolean;
	isMatched: boolean;
}
export const Level = () => {
	const [win, setWin] = useState<boolean>(false);
	const [gameCards, setGameCards] = useState<IPair[]>([]);
	const [animal, setAnimal] = useState<string>('');
	const classes = styles();
	const { difficulty } = useParams<{ difficulty: string }>();
	const navigate = useNavigate();

	const createPairs = (difficulty: number) => {
		let pairs = [];
		// create first half of the cards
		for (let i = 0; i < difficulty; i++) {
			pairs.push({
				name: String.fromCharCode(97 + i),
				isFlipped: false,
				isMatched: false,
			});
		}
		pairs = [...pairs, ...pairs];
		// add number property
		pairs = pairs.map((pair, index) => {
			return {
				...pair,
				number: index,
			};
		});
		// randomize pairs
		for (let i = pairs.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[pairs[i], pairs[j]] = [pairs[j], pairs[i]];
		}

		return pairs;
	};

	const checkMatch = () => {
		const flippedCards = gameCards.filter((card) => card.isFlipped);
		const filteredFlippedCards = flippedCards.filter((card) => !card.isMatched);
		if (filteredFlippedCards.length === 2) {
			setTimeout(() => {
				manageMatch();
				flipBackNonMatched();
			}, 1000);
		}
	};

	const flipBackNonMatched = () => {
		setGameCards((prevState) =>
			prevState.map((card) => {
				if (card.isFlipped && !card.isMatched) {
					return {
						...card,
						isFlipped: false,
					};
				}
				return card;
			})
		);
	};

	const winGame = () => {
		const matchedCards = gameCards.filter((card) => card.isMatched);
		if (matchedCards.length === gameCards.length && gameCards.length > 0) {
			setWin(true);
		}
	};

	const manageMatch = () => {
		const flippedCards = gameCards.filter((card) => card.isFlipped);
		const filteredFlippedCards = flippedCards.filter((card) => !card.isMatched);
		if (filteredFlippedCards.length === 2) {
			const firstCard = filteredFlippedCards[0];
			const secondCard = filteredFlippedCards[1];
			if (firstCard.name === secondCard.name) {
				setGameCards((prevState) =>
					prevState.map((card) => {
						if (card.isFlipped && !card.isMatched) {
							return {
								...card,
								isMatched: true,
							};
						}
						return card;
					})
				);
			}
		}
	};

	const handleCardClick = (index: number) => {
		const newPairs = [...gameCards];
		newPairs[index].isFlipped = true;
		setGameCards(newPairs);
		checkMatch();
	};

	const backToMenu = () => {
		navigate('/');
	};

	useEffect(() => {
		setAnimal(randomAnimal());
		return setGameCards(createPairs(parseInt(difficulty!)));
	}, []);

	useEffect(() => {
		winGame();
	}, [gameCards]);

	const WinModal = () => {
		return (
			<div className={classes.modal}>
				<h1>You win!</h1>
				<button className={classes.modalButton} onClick={() => setWin(false)}>
					Play again
				</button>
				<button className={classes.modalButton} onClick={backToMenu}>
					Back to menu
				</button>
			</div>
		);
	};
	return (
		<div className={classes.continer}>
			{win ? (
				<WinModal />
			) : (
				<>
					<button className={classes.backButton} onClick={backToMenu}>
						{'X'}
					</button>
					<section className={classes.cardGrid}>
						{gameCards.map((pair, i) => (
							<div
								className={classes.card}
								key={pair.number}
								style={{
									background: pair.isFlipped
										? pair.isMatched
											? 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
											: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
										: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
								}}>
								<button
									className={classes.cardBtn}
									key={pair.number}
									onClick={() => handleCardClick(i)}>
									{pair.isFlipped ? pair.name : animal}
								</button>
							</div>
						))}
					</section>
				</>
			)}
		</div>
	);
};
