import React from 'react';
import {Button, Card, CardActions, CardContent, Grid, makeStyles, Typography} from "@material-ui/core";
import GrossProfitMonthChart from "../../charts/grossProfit/GrossProfitMonthChart";
import {Months} from "../../data/filter/monthFilter";
import moment from "moment";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(({spacing}) => ({
  root: {
    minWidth: 275,
  },
  offset: {
    marginTop: -spacing(4)
  }
}));

const HomepageView: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const currentMonth = moment().month();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Card className={classes.root}>
            <CardContent className={classes.offset}>
              <GrossProfitMonthChart month={Months.January}/>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => history.push(`/gross-profit/${Months.January}`)}
              >
                Detail
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className={classes.root}>
            <CardContent className={classes.offset}>
              <GrossProfitMonthChart month={currentMonth}/>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => history.push(`/gross-profit/${currentMonth}`)}
              >
                Detail
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5">Example dashboard</Typography>
              <Typography>
                This is example dashboard. You can use detail button on this page or navigate with the left menu.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomepageView;