import React, { useState } from 'react';
import "./Todo.css"

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, done: false }]);
            setNewTodo('');
        }
    };

    const handleToggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].done = !updatedTodos[index].done;
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <h4>Add Todo</h4>
            <div className="todo-form">
                <input
                    type="text"
                    value={newTodo}
                    onChange={handleInputChange}
                    placeholder="Add a new todo"
                />
            </div>
            <button onClick={handleAddTodo}>Add</button>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span className={todo.done ? 'done' : ''}>{todo.text}</span>
                        <div className="actions">
                            <span
                                className="tick"
                                onClick={() => handleToggleTodo(index)}
                            >
                                ✔
                            </span>
                            <span
                                className="delete"
                                onClick={() => handleDeleteTodo(index)}
                            >
                                ✖
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
