import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'; // Import the Link component
import { homeStyles } from '../styles/homeStyles';
import { theme } from '../styles/darkTheme'; 
import { ThemeProvider } from '@material-ui/core/styles';

export default function CategoryPicker() {
  const classes = homeStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.centerContainer}>
        <Typography className={classes.title} variant="h2">
          Categories
        </Typography>
        <span>
          <Typography className={classes.title} variant="h5">
            Capitals
          </Typography>
          <div className={classes.buttonContainer}>
            <Button 
              className={classes.button} 
              variant="contained"
              component={Link}
              to="/firebase-clue"
              state='african_capitals'
            >
              African Capitals
            </Button>
            <Button 
              className={classes.button} 
              variant="contained"
              component={Link}
              to="/firebase-clue"
              state='european_capitals'
            >
              European Capitals
            </Button>
          </div>  
        </span>
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