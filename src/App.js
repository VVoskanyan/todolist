import {Provider} from 'react-redux';
import './App.css';
import  store  from './redux/state';
import { TodoFooter } from './TodoFooter/TodoFooter';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

function App() {
  return (<div className="App">
      <Provider store = {store}>
        TODO LIST
        <TodoForm/>
        <TodoList/>
        <TodoFooter/>
      </Provider>
    </div>
  );
}

export default App;
