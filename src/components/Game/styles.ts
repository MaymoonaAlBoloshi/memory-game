import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  buttonGroup: {
    display: "flex",
    width: "100%",
    padding: 24,
    margin: 24,
    border: "1px solid red",
    gap: 8,
  },
  difficultyBtn: {
    border: "4px inset black",
    borderRadius: 0,
  },
});

export default useStyles;
