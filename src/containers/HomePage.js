import * as React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'; // Import the Link component

const useStyles = makeStyles((theme) => ({
  centerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  button: {
    maxWidth: '200px',
  },
}));


export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.centerContainer}>
      <Typography className={classes.title} variant="h2">
        Jeopardy Study Tool
      </Typography>
      <div className={classes.buttonContainer}>
        <Button className={classes.button} variant="contained">Study</Button>
        <Button className={classes.button} variant="contained">Play</Button>
        <Button 
          className={classes.button} 
          variant="contained"
          component={Link}
          to="/random-clue" // Set the target URL for the Link
        >
          Random
        </Button>
      </div>
    </div>
  )
}