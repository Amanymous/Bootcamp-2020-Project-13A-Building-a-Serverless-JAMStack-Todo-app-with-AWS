import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TodoList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([
      { id: 0, text: "abc" },
      { id: 1, text: "abd" },
      { id: 2, text: "abe" },
    ]);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <h3>Todo List</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.text}</td>
                <td>
                  <Link to={`/edit/${todo.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
