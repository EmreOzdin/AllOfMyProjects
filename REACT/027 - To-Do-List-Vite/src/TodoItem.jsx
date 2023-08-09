export function TodoItem({ completed, id, title }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          //onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {todo.title}
      </label>
      <button
        //onClick={() => deleteTodo(id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
