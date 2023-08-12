import React, { useEffect, useState } from 'react';
// Change the import statement here
import firebase from 'firebase/compat/app'; 
// Also update the import for the specific Firebase service you need
import 'firebase/compat/database'; 
import Typography from '@material-ui/core/Typography';
import firebaseConfig from '../config/firebaseConfig'; // Adjust the path to match your file structure
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// Import the useStyles hook from the separate styles.js file
import { useStyles } from '../styles/clueStyles';
// Import the theme from the separate theme.js file 
import { theme } from '../styles/darkTheme'; 
import compareAnswers from '../utils/compareUtils';

const FirebaseClue = () => {
  const classes = useStyles();
  // State to store the data retrieved from Firebase
  const [loading, setLoading] = useState(false);
  const [clues, setClues] = useState([]);
  const [curClueIndex, setCurClueIndex] = useState(0);
  const [curClue, setCurClue] = useState({ question: '', answer: '' });
  const [userAnswer, setUserAnswer] = useState('');
  const [answerResult, setAnswerResult] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [originalSize, setOriginalSize] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  // Fetch data from Firebase database on component mount
  useEffect(() => {
    setLoading(true);
    const database = firebase.database();
    // Replace 'your-data-path' with the actual path to your data in the database
    const dataRef = database.ref('/'); 

    dataRef.once('value')
      .then((snapshot) => {
        const fetchedData = snapshot.val();
        const shuffledArray = fetchedData.sort((a, b) => 0.5 - Math.random());
        setOriginalSize(shuffledArray.length);
        setClues(shuffledArray);
        setCurClueIndex(0);
        setCurClue(shuffledArray.at(0));
        console.log('fetched data', fetchedData);
      })
      .catch((error) => {
        console.error('Error fetching data from Firebase:', error);
      })
      .finally(() => {
        setLoading(false)
      });
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  };

  const checkAnswer = () => {
    console.log("check answer");
    const correctAnswer = curClue?.answer.toLowerCase();
    const userEnteredAnswer = userAnswer ? 
      userAnswer.trim().toLowerCase() : '';

    console.log(userAnswer);
    if (compareAnswers(correctAnswer, userEnteredAnswer)) {
      setAnswerResult({ 
        status: 'correct', 
        message: 'Correct!' 
      });
      setNumCorrect(numCorrect + 1);
    } else {
      setAnswerResult({ 
        status: 'incorrect', 
        message: `Incorrect. The correct answer is "${curClue?.answer}"` 
      });
    }
    setTimeout(() => {
      setAnswerResult(null); // Clear the answerResult after 2 seconds
      setUserAnswer('');
      fetchNewQuestion(); // Fetch a new question when the answer is correct
    }, 2000);
  };

  const fetchNewQuestion = () => {
    //setUserAnswer('');
    if (clues.length === 1) {
      setGameOver(true);
    }
    console.log('current clue', curClue);
    console.log("fetch new question");
    // Remove used clue from array
    console.log('clues', clues);
    const cluesWithUsedRemoved = clues.slice(1, clues.length);
    setClues(cluesWithUsedRemoved);
    console.log('clues', cluesWithUsedRemoved);
    setCurClueIndex(curClueIndex + 1);
    setCurClue(clues.at(curClueIndex));
    console.log('current clue', curClue);
  };

  const handleUserAnswerChange = (event) => {
    console.log("handle user answer change");
    setUserAnswer(event.target.value);
  };

  if (gameOver) {
    return (<p>Hi</p>)
  } else {
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
                    Question: {originalSize - clues.length + 1}/{originalSize}
                  </Typography>
                  <Typography variant="subtitle1" style={{ textAlign: 'right' }}>
                    Score: {(numCorrect / (originalSize - clues.length + 1)).toFixed(2) * 100}%
                  </Typography>
                </div>
                <Typography className={`${classes.categoryText} ${classes.whiteText}`} variant="h5">
                  African Capitals
                </Typography>
                <Typography className={classes.whiteText} variant="body1">
                  {curClue?.question}
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
                  <MuiAlert elevation={6} variant="filled" onClose={() => 
                    setAnswerResult(null)} severity="success">
                  {answerResult?.message}
                  </MuiAlert>
                </Snackbar>
                {/* Incorrect Answer Snackbar */}
                <Snackbar
                  open={answerResult?.status === 'incorrect'}
                  autoHideDuration={2000}
                  onClose={() => setAnswerResult(null)}
                >
                  <MuiAlert elevation={6} variant="filled" onClose={() => 
                    setAnswerResult(null)} severity="error">
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
  }
};

// Data from Firebase: {JSON.stringify(data)}
export default FirebaseClue;
