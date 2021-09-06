import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const theme = responsiveFontSizes(
    createTheme({
      palette: {
        primary: { main: '#000000' },
        secondary: { main: '#46A573' },
      },
    }),
    {
      factor: 4,
      breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
    }
);