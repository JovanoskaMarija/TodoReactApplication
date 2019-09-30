import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// TODO: Delete unused files
// TODO: Create folder Todos, where you would store all Todo's related components and styles, and then import those in App
// TODO: Rename our application from TodoList to Todos
// TODO: Rename all internal components to exclude 'Todo' in their names, 
// ex: TodoItemsList -> List,   TodoFilterButtons -> Filter (we don't want to limit ourself with buttons)



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
