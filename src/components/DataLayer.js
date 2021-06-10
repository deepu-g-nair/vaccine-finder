import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Push from "push.js";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "30px",
  },
  title: {
    fontFamily: "Poppins",
  },
  subTitle: {
    fontFamily: "Poppins",
    fontSize: "12px",
  },
  dose: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-around",
  },
  divider: {
    marginTop: "15px",
  },
  doseDetails: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-around",
  },
  doseBox: {
    border: "none",
    backgroundColor: "blue",
    color: "white",
    padding: "5px",
    borderRadius: "6px",
    fontFamily: "Poppins",
    fontSize: "12px",
  },
  doseSlot: {
    border: "1px solid blue",
    backgroundColor: "none",
    color: "black",
    padding: "5px",
    borderRadius: "10px",
    fontFamily: "Poppins",
    fontSize: "12px",
    marginTop: "20px",
  },
});

const DataLayer = (props) => {
  useEffect(() => {
    Push.create("Vaccine slots are available", {
      body: "Book your spot now",
      icon: "maskable.png",
    });
  }, []);

  const classes = useStyles();

  return (
    <>
      {props.value.map((item) =>
        item.available_capacity_dose1 > 0 ||
        item.available_capacity_dose2 > 0 ? (
          <Card className={classes.root} variant="elevation">
            {/* {console.log(item)} */}
            <CardContent>
              <Typography variant="h6" className={classes.title} align="center">
                {item.name}
              </Typography>
              <Typography
                color="textSecondary"
                className={classes.subTitle}
                align="center"
              >
                {item.address}
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={classes.dose}>
                <Typography style={{ fontFamily: "Poppins" }}>
                  Dose 1 : {item.available_capacity_dose1} slots
                </Typography>
                <Typography style={{ fontFamily: "Poppins" }}>
                  Dose 2 : {item.available_capacity_dose2} slots
                </Typography>
              </Typography>
              <Typography className={classes.doseDetails}>
                <Typography className={classes.doseBox}>
                  {item.min_age_limit}+
                </Typography>
                <Typography className={classes.doseBox}>
                  {item.vaccine}
                </Typography>
                <Typography className={classes.doseBox}>
                  {item.fee_type === "Paid"
                    ? item.fee_type + " : " + item.fee + "/-"
                    : item.fee_type}
                </Typography>
              </Typography>
              <Grid container spacing={1}>
                {item.slots.map((slot) => (
                  <Grid item xs={6} sm={3}>
                    <Typography align="center" className={classes.doseSlot}>
                      {slot}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://selfregistration.cowin.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  style={{ marginBottom: "10px", background: "#FFC002" }}
                >
                  <Typography className={classes.title}>
                    Book your slot now 🌍
                  </Typography>
                </Button>
              </a>
            </CardActions>
          </Card>
        ) : null
      )}
    </>
  );
};

export default DataLayer;
