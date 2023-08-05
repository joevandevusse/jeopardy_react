import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  // Define the custom theme with a black background
  palette: {
    type: 'dark', // Use dark mode
    background: {
      default: '#000000', // Set the background color to black (#000000)
    },
  },
});