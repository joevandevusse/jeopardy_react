import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'; // Import the Link component
import { homeStyles } from '../styles/homeStyles';
import { theme } from '../styles/darkTheme'; 
import { ThemeProvider } from '@material-ui/core/styles';

export default function HomePage() {
  const classes = homeStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.centerContainer}>
        <Typography className={classes.title} variant="h2">
          Jeopardy Study Tool
        </Typography>
        <div className={classes.buttonContainer}>
          <Button 
            className={classes.button} 
            variant="contained"
            component={Link}
            to="/firebase-clue"
          >
            Study
          </Button>
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
      <style>
        {`
          @media (prefers-color-scheme: dark) {
            body, html {
              background-color: #000000;
            }
          }
        `}
      </style>
    </ThemeProvider>
  )
}