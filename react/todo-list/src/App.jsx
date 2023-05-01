
import './App.css';
import TodoForm from './components/TodoForm';
import DisplayList from './components/DisplayList';

function App() {
  return (
    <div className="App">
      <DisplayList/>
      <TodoForm/>
    </div>
  );
}

export default App;
