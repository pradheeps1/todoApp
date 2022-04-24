import './App.css';
import { Container } from '@mui/material';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <Container>
        <TodoApp/>
      </Container>
    </div>
  );
}

export default App;
