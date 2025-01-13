import Timer from './Timer';
import Counter from './Counter.tsx';
import CounterRef from './CounterRef.jsx';
import Forum from './Forum.jsx';
// import OnlineStatus from './Online.jsx';
import { IconButton, Paper, CssBaseline, createTheme, ThemeProvider, Stack } from '@mui/material';
import { Brightness7, Brightness4 } from "@mui/icons-material"

import { useTheme } from './context/themeContext.jsx';
const App = () => {

  const { theme, toggleTheme } = useTheme();

  const muiTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Paper
        className="min-h-screen w-screen flex flex-col justify-center items-center transition-colors duration-500 ease-in-out"
      >
        <span>{theme == 'light' ? "Light Mode" : "Dark Mode"}

          <IconButton
            onClick={toggleTheme}
            color="primary"
          >
            {theme == 'light' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

        </span>
        <Stack spacing={4} className="items-center">
          <Timer />
          {/* <Counter /> */}
          <CounterRef />
          <Forum />
          {/* <OnlineStatus /> */}
        </Stack>
      </Paper>
    </ThemeProvider>
  )
}

export default App