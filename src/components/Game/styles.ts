import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  game: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    color: "white",
  },
  pageTttle: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  buttonGroup: {
    display: "flex",
    padding: 24,
    margin: 24,
    gap: 34,
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "10px",
    boxShadow: " 0 0 10px rgba(255, 255, 255, 0.2)",

  },
  difficultyBtn: {
    border: "none",
    background: "transparent",
    color: "white",
    fontSize: 24,
    cursor: "pointer",
    "&:hover": {
      color: "rgba(255, 255, 255, 0.5)",
    }
  },
});

export default useStyles;
