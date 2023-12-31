
import { makeStyles } from '@material-ui/core/styles';

export const homeStyles = makeStyles((theme) => ({
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
    color: '#ffffff',
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
  categoryContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Align items within the category container
    height: '100%',
  },
  categoryTitle: {
    margin: `${theme.spacing(2)}px 0`,
  }
}));