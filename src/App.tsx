import React from 'react';
import './App.css';
import { TodoList } from './TodoList';

function App() {
    return (
        <div className="App">
            <TodoList topic={"whats to learn1111"}/>
            <TodoList topic={"whats to learn 333333333"}/>,
           

        </div>
    );
}


export default App;
