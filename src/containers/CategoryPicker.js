//import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';
//import { Link } from 'react-router-dom'; // Import the Link component
import { homeStyles } from '../styles/homeStyles';
import { theme } from '../styles/darkTheme'; 
import { ThemeProvider } from '@material-ui/core/styles';
import categories from '../config/categoryConfig';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
//import Category from './Category';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function CategoryPicker() {
  //const classes = homeStyles();
  console.log(categories);
  return (
    <ThemeProvider theme={theme}>
      {/* <div className={classes.centerContainer}>
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
      </div> */}  

      <Container maxWidth="md">
      <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid item xs={6} key={category.title}> 
              {/* Define the width for each category */}
              <Category
                key={category.title}
                title={category.title}
                quizzes={category.quizzes}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <style>
          {`
            @media (prefers-color-scheme: dark) {
              body, html {
                background-color: #000000;
              }
            }

            /* CSS transition for background color change */
            .MuiTextField-root {
              transition: background-color 0.2s ease;
            }
          `}
        </style>
    </ThemeProvider>
  )
}

const Category = ({ title, quizzes }) => {
  const classes = homeStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.centerContainer}>
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
        
        <Box display="flex" flexDirection="column">
          <div className={classes.buttonContainer}>
            {quizzes.map((quiz) => (
              <Button
                key={quiz.id}
                variant="contained"
                color="primary"
                href={quiz.url} // You can use Link from react-router-dom here
              >
                {quiz.title}
              </Button>
            ))}
          </div>
        </Box>    
      </div>
      <style>
          {`
            @media (prefers-color-scheme: dark) {
              body, html {
                background-color: #000000;
              }
            }

            /* CSS transition for background color change */
            .MuiTextField-root {
              transition: background-color 0.2s ease;
            }
          `}
        </style>
    </ThemeProvider>
  );
};