import {makeStyles} from "@material-ui/core";

export const useChartStyle = makeStyles(({spacing}) => ({
  container: {
    marginTop: spacing(4)
  },
  chartContainer: {
    height: 400
  }
}));