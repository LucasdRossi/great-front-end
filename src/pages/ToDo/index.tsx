import { useReducer, useState } from "react";
import { withHeader } from "../../components/Header";

import "./to-do.css";

interface ToDo {
  id: number;
  task: string;
}

type ToDoAction =
  | { type: "ADD_TODO"; payload: { task: ToDo["task"] } }
  | { type: "REMOVE_TODO"; payload: { id: ToDo["id"] } };

function todoReducer(state: ToDo[], action: ToDoAction): ToDo[] {
  if (action.type === "ADD_TODO") {
    return [...state, { id: Math.random(), task: action.payload.task }];
  }
  if (action.type === "REMOVE_TODO") {
    return state.filter((todo) => todo.id !== action.payload.id);
  }

  return state;
}

function ToDoPage() {
  const [task, setTask] = useState<string>();
  const [todos, dispath] = useReducer(todoReducer, []);

  const handleDelete = (id: ToDo["id"]) => {
    dispath({ type: "REMOVE_TODO", payload: { id } });
  };

  const handleSubmitTask = () => {
    if (!task) return;

    dispath({ type: "ADD_TODO", payload: { task } });
    setTask("");
  };

  return (
    <main>
      <h1>Todo List</h1>
      <div>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              handleSubmitTask();
            }
          }}
          type="text"
          placeholder="Add your task"
        />
        <div>
          <button onClick={handleSubmitTask}>Submit</button>
        </div>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default withHeader(ToDoPage);
