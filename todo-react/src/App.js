import { useState } from 'react';
import { Input, Button, Paper, ThemeProvider, CssBaseline, createTheme, Typography, Box } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';

const App = () => {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  // const [isDarkMode, setIsDarkMode] = useState(true)
  const isDarkMode = true;

  const handeInput = e => {
    setInput(e.target.value);
  }

  const insertTodo = (e) => {
    e.preventDefault()
    if (!input) return
    setTodos([...todos, { text: input, complete: false }])
    setInput('')
  }

  const completeTodo = (i) => {
    todos[i].complete = !todos[i].complete
    setTodos([...todos])
  }

  const removeTodo = (i) => {
    const temp = todos.filter((_, index) => index !== i);
    setTodos(temp);
  }

  // Define light and dark themes
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: isDarkMode ? '#f48fb1' : '#d32f2f',
      },
    },
  });

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ padding: '5rem' }}>

        <Box sx={{
          display: 'flex', flexDirection:
            'row', width: '100%', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem', gap: '1rem'
        }}
          component={'form'}
          autoComplete='off'
          onSubmit={insertTodo}
        >
          <Input placeholder='Todo...' onChange={handeInput} value={input}></Input>
          <Button variant={'contained'} type={'submit'} onClick={insertTodo}>Insert</Button>
        </Box>

        <Paper sx={{ height: '100%', p: '40px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {
            todos.length !== 0 ? Array.from(todos).map((todo, i) => {
              return <Paper sx={{
                height: '80px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'space-between', p:
                  '2rem', bgcolor: todo.complete ? 'green' : 'grey', transition: 'all 0.2s'
              }} key={i}>
                <Typography>{todo.text}</Typography>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <Button variant={'outlined'} onClick={() => completeTodo(i)}><CheckBox check={todo.complete} /></Button>
                  <Button variant={'contained'} sx={{ bgcolor: '#616161' }} onClick={() => { removeTodo(i) }}><CloseIcon /></Button>
                </div>
              </Paper>
            }) : <Typography color='grey'>Add Something</Typography>
          }
        </Paper>
      </Box>

    </ThemeProvider >
  );
}

const CheckBox = ({ check }) => {
  if (check) return <CheckBoxIcon />
  else return <CheckBoxOutlineBlankIcon />
}

export default App;
