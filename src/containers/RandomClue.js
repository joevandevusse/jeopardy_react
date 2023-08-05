import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

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
  correctText: {
    color: '#7cff7c', // Set the background color to green for correct answer
  },
  incorrectText: {
    color: '#ff7c7c', // Set the background color to red for incorrect answer
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
    color: 'white',
  },
}));

const RandomClue = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [userAnswer, setUserAnswer] = useState('');
  const [loading, setLoading] = useState(true);
  const [answerResult, setAnswerResult] = useState(null);

  useEffect(() => {
    fetchNewQuestion(); // Fetch initial question only once on mount
  }, []); // Empty dependency array means this effect runs only once on mount

  const fetchNewQuestion = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://jservice.io/api/random');
      console.log(response);
      setData(response.data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
    setAnswerResult(null);
    setUserAnswer('');
  };

  const handleUserAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const checkAnswer = () => {
    const correctAnswer = data.answer.toLowerCase();
    const userEnteredAnswer = userAnswer.trim().toLowerCase();

    if (compareAnswers(correctAnswer, userEnteredAnswer)) {
      setAnswerResult({ 
        status: 'correct', 
        message: 'Correct!' 
      });
    } else {
      setAnswerResult({ 
        status: 'incorrect', 
        message: `Incorrect. The correct answer is "${data.answer}"` 
      });
    }
    setTimeout(() => {
      setAnswerResult(null); // Clear the answerResult after 2 seconds
      fetchNewQuestion(); // Fetch a new question when the answer is correct
    }, 2000);
  };

  const compareAnswers = (correctAnswer, userEnteredAnswer) => {
    // Remove common words from both answers
    const commonWords = ['a', 'an', 'the'];
    const regex = new RegExp(`\\b(${commonWords.join('|')})\\b`, 'gi');

    const cleanedCorrectAnswer = correctAnswer.replace(regex, '').trim();
    const cleanedUserAnswer = userEnteredAnswer.replace(regex, '').trim();

    // Remove special characters from both answers
    const specialCharsRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    const finalCorrectAnswer = cleanedCorrectAnswer.replace(specialCharsRegex, '');
    const finalUserAnswer = cleanedUserAnswer.replace(specialCharsRegex, '');

    // Remove HTML tags from both answers
    const htmlTagsRegex = /<[^>]+>/g;

    const finalCleanedCorrectAnswer = finalCorrectAnswer.replace(htmlTagsRegex, '');
    const finalCleanedUserAnswer = finalUserAnswer.replace(htmlTagsRegex, '');

    return finalCleanedCorrectAnswer.toLowerCase() === finalCleanedUserAnswer.toLowerCase();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
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
              <div className={classes.infoContainer}>
                <Typography variant="subtitle1" style={{ textAlign: 'left' }}>
                  Year: {data.airdate ? new Date(data.airdate).getFullYear() : ''}
                </Typography>
                <Typography variant="subtitle1" style={{ textAlign: 'right' }}>
                  Value: ${data.value || ''}
                </Typography>
              </div>
              <Typography className={`${classes.categoryText} ${classes.whiteText}`} variant="h5">
                {data.category?.title.toUpperCase()}
              </Typography>
              <Typography className={classes.whiteText} variant="body1">
                {data.question}
              </Typography>
              <TextField
                className={`${classes.textField} ${classes.darkTextField} 
                  ${answerResult?.status === 'correct' ? classes.correctAnswer : 
                  answerResult?.status === 'incorrect' ? classes.incorrectAnswer : ''}`}
                label="Your Answer"
                variant="outlined"
                value={userAnswer}
                onChange={handleUserAnswerChange}
                onKeyPress={handleKeyPress}
                disabled={answerResult?.status === 'correct' || answerResult?.status === 'incorrect'}
                autoComplete="off" // Disable auto-completion to prevent background color glitch
              />
              <div className={classes.submitButtonContainer}>
                <Button variant="contained" color="primary" onClick={checkAnswer}>
                  Submit
                </Button>
              </div>
              {/* Correct Answer Snackbar */}
              <Snackbar
                open={answerResult?.status === 'correct'}
                autoHideDuration={2000}
                onClose={() => setAnswerResult(null)}
              >
                <MuiAlert elevation={6} variant="filled" onClose={() => setAnswerResult(null)} severity="success">
                  {answerResult?.message}
                </MuiAlert>
              </Snackbar>
              {/* Incorrect Answer Snackbar */}
              <Snackbar
                open={answerResult?.status === 'incorrect'}
                autoHideDuration={2000}
                onClose={() => setAnswerResult(null)}
              >
                <MuiAlert elevation={6} variant="filled" onClose={() => setAnswerResult(null)} severity="error">
                {answerResult?.message}
                </MuiAlert>
              </Snackbar>
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

export default RandomClue;
