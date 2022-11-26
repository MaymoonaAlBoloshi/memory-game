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
			<h2 className={classes.pageTttle}> Select Difficulty </h2>
			<section className={classes.buttonGroup}>
				<button
					className={classes.difficultyBtn}
					onClick={() => handleStartGame(2)}>
					2/2
				</button>
				<button
					className={classes.difficultyBtn}
					onClick={() => handleStartGame(4)}>
					4/4
				</button>
				<button
					className={classes.difficultyBtn}
					onClick={() => handleStartGame(6)}>
					6/6
				</button>
			</section>
		</div>
	);
};
