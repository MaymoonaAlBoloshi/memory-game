import styles from './styles';
import { useNavigate } from 'react-router-dom';

export const Game = () => {
	const classes = styles();
  const navigate = useNavigate();

	const handleStartGame = (difficulty: number) => {
		return navigate(`/level/${difficulty}`);
	};

	return (
		<div className={classes.game}>
			<h2 className={classes.pageTttle}> MEMORY GAME </h2>
			<p>
				Select the difficulty level and start the game. You have 3 levels to choose
			</p>
			<section className={classes.buttonGroup}>
				<button
					className={classes.difficultyBtn}
					onClick={() => handleStartGame(2)}>
					Easy
				</button>
				<button
					className={classes.difficultyBtn}
					onClick={() => handleStartGame(4)}>
					Medium
				</button>
				<button
					className={classes.difficultyBtn}
					onClick={() => handleStartGame(6)}>
					Hard
				</button>
			</section>
		</div>
	);
};
