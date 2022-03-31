import { title } from 'process';
import React from 'react';
import './App.css';
import { TodoList } from './TodoList';

function App() {

    const arr1 = [
        { id: 1, title: "HTML&CSS111", isDone: true },
        { id: 2, title: "Js111", isDone: true },
        { id: 3, title: "ReactJS1111", isDone: false },
        { id: 4, title: "Rest API11111", isDone: false }
        
    ]

    const arr2 = [
        { id: 1, title: "HTML&CSS2222", isDone: true },
        { id: 2, title: "Js2222", isDone: true },
        { id: 3, title: "ReactJS22222", isDone: false },
        { id: 4, title: "Rest API2222", isDone: false },
        { id: 5, title: "GraphQl2222", isDone: false }
    ]

    return (
        <div className="App">
            <TodoList topic1={"What to learn-11111"}  arr={arr1} />
            <TodoList topic1={"What to learn-222222"}  arr={arr2} />



        </div>
    );
}


export default App;
