import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Jost"',
      '"Helvetica Neue"',
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const indexStyles = makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: "0",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "65vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
    transition: "0.3s ease-in-out",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "&:hover": {
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
});

const cardStyles = makeStyles({
  media: {
    height: 250,
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid white",
  },
  activeCard: {
    borderBottom: "10px solid #22289a",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});

export { indexStyles, cardStyles, theme };
