import React, { useEffect, useState } from 'react';
// Change the import statement here
import firebase from 'firebase/compat/app'; 
// Also update the import for the specific Firebase service you need
import 'firebase/compat/database'; 
import Typography from '@material-ui/core/Typography';
// Adjust the path to match your file structure
import firebaseConfig from '../config/firebaseConfig'; 
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
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useLocation } from 'react-router-dom';
import categoryConfig from '../config/categoryConfig'; 

const FirebaseClue = () => {
  // console.count('useEffect calls');
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [clueQueue, setClueQueue] = useState([]);
  const [curClue, setCurClue] = useState({ question: '', answer: '' });
  const [userAnswer, setUserAnswer] = useState('');
  const [answerResult, setAnswerResult] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [numCorrect, setNumCorrect] = useState(0);
  const [repeatToggle, setRepeatToggle] = useState(false);
  const [questionsAsked, setQuestionsAsked] = useState(0);

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const location = useLocation();
  const category = location.state;

  // Fetch data from Firebase database on component mount
  useEffect(() => {
    console.log(category);
    setLoading(true);
    const database = firebase.database();
    const dataRef = database.ref('/'); 

    dataRef.once('value')
      .then((snapshot) => {
        const fetchedData = snapshot.val();
        const fetchedCategoryData = fetchedData[category];
        console.log(fetchedCategoryData);
        const shuffledArray = fetchedCategoryData.sort((a, b) => 0.5 - Math.random());
        setCurClue(shuffledArray[0]);
        setClueQueue(shuffledArray);
        //console.log(shuffledArray);
      })
      .catch((error) => {
        console.error('Error fetching data from Firebase:', error);
      })
      .finally(() => {
        setLoading(false)
      });
  }, [category]);

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
    
    setQuestionsAsked(questionsAsked + 1);
    let isCorrect = true;
    if (compareAnswers(correctAnswer, userEnteredAnswer)) {
      setAnswerResult('Correct!');
      setNumCorrect(numCorrect + 1);
    } else {
      setAnswerResult(`Incorrect. The correct answer is "${curClue?.answer}"`);
      isCorrect = false;
    }    
  
    setTimeout(() => {
      // Clear the answerResult after 2 seconds
      setAnswerResult('');
      setUserAnswer('');
      // Fetch a new question when the answer is correct
      fetchNewQuestion(isCorrect); 
    }, 2000);
  };

  const fetchNewQuestion = (wasCorrect) => {
    if (clueQueue.length === 1) {
      setGameOver(true);
    }
    // Remove the first element from the queue
    let updatedQueue = [...clueQueue];
    updatedQueue.shift();

    // Check if we need to repeat a wrong answer
    console.log('toggle, wasCorrect', repeatToggle, wasCorrect);
    if (repeatToggle && !wasCorrect) {
      updatedQueue = [...updatedQueue, curClue];
    }

    // Update currentClue and clueQueue states
    setCurClue(updatedQueue[0]);
    setClueQueue(updatedQueue);
    console.log(clueQueue);
  };

  const handleUserAnswerChange = (event) => {
    console.log("handle user answer change");
    setUserAnswer(event.target.value);
  };

  const handleRepeatToggleChange = () => {
    setRepeatToggle(!repeatToggle);
  };

  if (!clueQueue) {
    return <Loading />
  } else if (gameOver) {
    return <GameOver finalScore={`{((numCorrect / (questionsAsked + 1)) * 100).toFixed(0)}%`} />
  } else {
    return (
      <ThemeProvider theme={theme}>
        <FormControlLabel
          className={`${classes.whiteText}`}
          control={<Switch checked={repeatToggle} onChange={handleRepeatToggleChange} />}
          label="Repeat Wrongs"
          labelPlacement="start"
          style={{ position: 'absolute', top: '10px', left: '10px' }}
          variant="subtitle1" 
        />
        <div className={classes.centerContainer}>
          <div className={classes.contentContainer}>
            {loading ? (
              <CircularProgress />
            ) : (
              <div>
                <div className={classes.infoContainer}>
                  <Typography variant="subtitle1" style={{ textAlign: 'left', marginRight: '16px' }}>
                    Question: {questionsAsked + 1}/{questionsAsked + clueQueue.length}
                  </Typography>
                  <Typography variant="subtitle1" style={{ textAlign: 'right' , marginLeft: '16px' }}>
                    Score: {((numCorrect / (questionsAsked + 1)) * 100).toFixed(0)}%
                  </Typography>
                </div>
                <Typography className={`${classes.categoryText} ${classes.whiteText}`} variant="h5">
                  {categoryConfig[category]}
                </Typography>
                <Typography className={classes.whiteText} variant="body1">
                  {curClue?.question}
                </Typography>
                <TextField
                  className={`${classes.textField} ${classes.darkTextField} 
                    ${answerResult === 'Correct!' ? classes.correctAnswer : 
                    answerResult.startsWith('Incorrect') ? classes.incorrectAnswer : ''}`}
                  label="Your Answer"
                  variant="outlined"
                  value={userAnswer}
                  onChange={handleUserAnswerChange}
                  onKeyPress={handleKeyPress}
                  disabled={answerResult === 'Correct' || answerResult.startsWith('Incorrect')}
                  autoComplete="off" // Disable auto-completion to prevent background color glitch
                />
                <div className={classes.submitButtonContainer}>
                  <Button variant="contained" color="primary" onClick={checkAnswer}>
                    Submit
                  </Button>
                </div>
                {/* Correct Answer Snackbar */}
                <Snackbar
                  open={answerResult === 'Correct!'}
                  autoHideDuration={2000}
                  onClose={() => setAnswerResult('')}
                >
                  <MuiAlert elevation={6} variant="filled" 
                    onClose={() => setAnswerResult('')} 
                    severity="success">
                  {answerResult}
                  </MuiAlert>
                </Snackbar>
                {/* Incorrect Answer Snackbar */}
                <Snackbar
                  open={answerResult.startsWith('Incorrect')}
                  autoHideDuration={2000}
                  onClose={() => setAnswerResult('')}
                >
                  <MuiAlert elevation={6} variant="filled" 
                    onClose={() => setAnswerResult('')} 
                    severity="error">
                  {answerResult}
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

export default FirebaseClue;

function Loading() {
  const classes = useStyles();
  return (
  <div className={classes.centerContainer}>
      <Typography className={`${classes.categoryText} ${classes.whiteText}`} variant="h5">
        Loading...
      </Typography>
    </div>
  );
}

function GameOver(props) {
  const classes = useStyles();
  return (
    <div className={classes.centerContainer}>
      <Typography className={`${classes.categoryText} ${classes.whiteText}`} variant="h5">
        Game Over!
      </Typography>
      <Typography className={`${classes.categoryText} ${classes.whiteText}`} variant="h5">
        Final Score: {props.finalScore}
      </Typography>
    </div>
  );
}

/*function transformCategory(underscoredCategory) {
  const categoryTokens = underscoredCategory.split('_');
  const upperCaseTokens = categoryTokens.map(word => {
    const capitalizedFirst = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return capitalizedFirst + rest;
  })
  return upperCaseTokens.join(" ")
}*/