import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Todo from "./todo";

function App() {
  const [todos, setTodos] = useState([]);

  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [validation, setValidation] = useState("");

  function handleTodoEntry(event) {
    event.preventDefault();
    
    const date = new Date();
    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric" };

    if (!description) {
      setValidation("Please enter your to-do...");
      return;
    }

    event.preventDefault();
    setTodos([
      ...todos,
      {
        category: category,
        description: description,
        date: date.toLocaleDateString(undefined, options),
        id: todos.length + 1,
      },
    ]);

    setCategory("");
    setDescription("");
    setValidation("");
  }

  function handleClearTodo(event) {
    event.preventDefault();
    setTodos([]);
  }

  return (
    <>
    <h1>Just Todo It...</h1>
      <form onSubmit={handleTodoEntry}>
        <div>
          <select value={category} onChange={(event) => {setCategory(event.target.value)}}>
            <option value="personal">personal</option>
            <option value="work">work</option>
            <option value="shopping">shopping</option>
            <option value="hobby">hobby</option>
          </select>
        </div>
        <h3>{validation}</h3>
        <div>
          <label htmlFor="todo-detail">Todo: </label>
          <input
            type="text"
            value={description}
            placeholder="Enter the todo..."
            className="textfield"
            id="todo-details"
            onChange={(event) => {setDescription(event.target.value)}}
          />
        </div>
        <input type="submit" id="add-todo" value="Add" />
      </form>

      <div className="tasks-volume">Tasks created {todos.length === 0 && <p>Add your first todo</p>}</div>
      <div>{todos.length}</div>
      <ul className="todo-list">
        {todos.map(todo => <li key={todo.id}>
          <Todo details={todo} />
        </li>
        )}
      </ul>
      <div>
        <button id="delete-list" onClick={handleClearTodo}>Clear list</button>
      </div>
    </>
  );
}

export default App;