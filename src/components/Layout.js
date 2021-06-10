import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";
import DataLayer from "./DataLayer";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    padding: "8px",
  },
  alert: {
    marginTop: "20px",
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography variant="h5" align="center" className={classes.title}>
          Covid-19 vaccine finder for Trivandrum
        </Typography>
      </AppBar>
      <Container maxWidth="sm">
        {props.val.every((item) => item === false) ? (
          <Alert severity="error" className={classes.alert}>
            Tomorrow's vaccine slots are currently not available 😐
          </Alert>
        ) : (
          <DataLayer value={props.val} />
        )}
      </Container>
    </div>
  );
};

export default Layout;
