import styles from "./styles";

export const Game = () => {
  const classes = styles();

  return (
    <div>
      <h2> Select Difficulty </h2>
      <section className={classes.buttonGroup}>
        <button className={classes.difficultyBtn}>2/2</button>
        <button className={classes.difficultyBtn}>2/2</button>
        <button className={classes.difficultyBtn}>2/2</button>
      </section>
    </div>
  );
};
