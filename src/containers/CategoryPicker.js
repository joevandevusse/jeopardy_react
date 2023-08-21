//import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';
import { homeStyles } from '../styles/homeStyles';
import { theme } from '../styles/darkTheme'; 
import { ThemeProvider } from '@material-ui/core/styles';
import categories from '../config/categoryConfig';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function CategoryPicker() {
  const classes = homeStyles();
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
      <Typography 
        className={classes.title} 
        variant="h2" 
        align="center" 
      >
        Categories
      </Typography>
      <Container maxWidth="md">
      <Grid container spacing={3} alignItems="flex-start">
          {categories.map((category) => (
            <Grid item xs={6} key={category.title}>
              <Box className={classes.categoryContainer}> 
                {/* Define the width for each category */}
                <Category
                  key={category.title}
                  title={category.title}
                  quizzes={category.quizzes}
                />
              </Box>
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
                component={Link}
                to='/firebase-clue' 
                state={quiz.url}
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