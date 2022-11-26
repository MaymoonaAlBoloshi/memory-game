import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  continer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    color: "white",
  },
  cardGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 300,
    width: "80vw",
    color: "white",
    background: "rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "10px",
padding: 6,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
    margin: 12,
    background: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.6)",
    },
  },
  pageTttle: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  cardBtn: {
    border: 'none',
    background: 'transparent',
    fontSize: 24,
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'bold'
  }
});

export default useStyles;
