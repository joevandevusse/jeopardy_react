import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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