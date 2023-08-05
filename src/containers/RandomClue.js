import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  centerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Set the minimum height to occupy the full viewport height
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '400px', // Set the maximum width for the content
    padding: theme.spacing(3), // Add some padding to the content
    backgroundColor: '#333333', // Set a dark background color (#333333)
    borderRadius: theme.spacing(2), // Add rounded corners to the content container
    textAlign: 'center', // Center text inside the container
  },
  textField: {
    width: '100%', // Set the width of the TextField to 100%
    marginBottom: theme.spacing(2), // Add spacing at the bottom of the TextField
    marginTop: theme.spacing(2),
  },
  submitButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  darkTextField: {
    '& .MuiInputBase-input': {
      color: '#ffffff', // Set the text color to white
    },
    '& .MuiOutlinedInput-root': {
      background: '#333333', // Set the background color to dark (#333333)
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ffffff', // Set the outline color to white on hover
      },
    },
  },
  categoryText: {
    marginBottom: theme.spacing(2), // Add spacing at the bottom of the category text
  },
  whiteText: {
    color: '#ffffff', // Set the text color to white
  },
  correctAnswer: {
    background: '#7cff7c', // Set the background color to green for correct answer
  },
  incorrectAnswer: {
    background: '#ff7c7c', // Set the background color to red for incorrect answer
  },
}));

const NewPage = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [userAnswer, setUserAnswer] = useState('');
  const [loading, setLoading] = useState(true);
  const [answerResult, setAnswerResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jservice.io/api/random');
        setData(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUserAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const checkAnswer = () => {
    const correctAnswer = data.answer.toLowerCase();
    const userEnteredAnswer = userAnswer.trim().toLowerCase();
    if (correctAnswer === userEnteredAnswer) {
      setAnswerResult('correct');
    } else {
      setAnswerResult('incorrect');
    }
    // Clear the user's answer after checking
    setUserAnswer('');
  };

  useEffect(() => {
    if (answerResult) {
      const timeout = setTimeout(() => {
        setAnswerResult(null);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [answerResult]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const theme = createTheme({
    // Define the custom theme with a black background
    palette: {
      type: 'dark', // Use dark mode
      background: {
        default: '#000000', // Set the background color to black (#000000)
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.centerContainer}>
        <div className={classes.contentContainer}>
          {loading ? (
            <CircularProgress />
          ) : (
            <div>
              <Typography className={`${classes.categoryText} ${classes.whiteText}`} variant="h5">
                {capitalizeFirstLetter(data.category?.title)}
              </Typography>
              <Typography className={classes.whiteText} variant="body1">
                {data.question}
              </Typography>
              <TextField
                className={`${classes.textField} ${classes.darkTextField} ${answerResult === 'correct' ? classes.correctAnswer : answerResult === 'incorrect' ? classes.incorrectAnswer : ''}`}
                label="Your Answer"
                variant="outlined"
                value={userAnswer}
                onChange={handleUserAnswerChange}
                onKeyPress={handleKeyPress}
                disabled={answerResult === 'correct' || answerResult === 'incorrect'}
                autoComplete="off" // Disable auto-completion to prevent background color glitch
              />
              <div className={classes.submitButtonContainer}>
                <Button variant="contained" color="primary" onClick={checkAnswer}>
                  Submit
                </Button>
              </div>
            </div>
          )}
        </div>
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

export default NewPage;
