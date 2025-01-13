import { useState, useEffect } from 'react';
import { Input, Button, Paper, ThemeProvider, CssBaseline, createTheme, Typography, Box } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';

const App = () => {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [page, setPage] = useState('')
  // const [isDarkMode, setIsDarkMode] = useState(true)
  const isDarkMode = true;

  useEffect(() => {
    if (localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }, [])

  const handeInput = e => {
    setInput(e.target.value);
  }

  const insertTodo = (e) => {
    e.preventDefault()
    if (!input) return
    setTodos([...todos, { text: input, complete: false }])
    setInput('')
    localStorage.setItem('todos', JSON.stringify([...todos, { text: input, complete: false }]))
  }

  const completeTodo = (i) => {
    todos[i].complete = !todos[i].complete
    setTodos([...todos])
    localStorage.setItem('todos', JSON.stringify([...todos]))
  }

  const removeTodo = (i) => {
    const temp = todos.filter((_, index) => index !== i);
    setTodos(temp);
    localStorage.setItem('todos', JSON.stringify(temp));
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
        <Box sx={{ marginInline: 'auto', width: 'min-content', marginBottom: '5rem' }}>
          <Box sx={{ display: 'flex', width: 'min-content' }}>
            <Button onClick={() => setPage('page1')}>page 1</Button>
            <Button onClick={() => setPage('page2')}>page 2</Button>
            <Button onClick={() => setPage('page3')}>page 3</Button>
          </Box>
          <ShowPage page={page} sx={{

          }} />
        </Box>
        <Paper sx={{ height: '100%', p: '40px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {todos.length === 0 && <Typography color='grey'>Add Something</Typography>}
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
            }) : ''
          }
        </Paper>
      </Box>

    </ThemeProvider >
  );
}

const ShowPage = ({ page, sx }) => {
  switch (page) {
    case 'page1':
      return <Typography sx={sx}>Page 1 Content</Typography>
    case 'page2':
      return <Typography sx={sx}>Page 2 Content</Typography>
    case 'page3':
      return <Typography sx={sx}>Page 3 Content</Typography>
    default:
      return <Typography sx={sx}>No Page Selected</Typography>
  }
}

const CheckBox = ({ check }) => {
  if (check) return <CheckBoxIcon />
  else return <CheckBoxOutlineBlankIcon />
}

export default App;
