import React from "react";
import { useForm } from "react-hook-form";

const TodoForm = ({ todo, submit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });
  const submitHandler = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="text">Text:</label>
        <input
          className="form-control"
          ref={register}
          type="text"
          name="text"
          id="text"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Save Todo
        </button>
      </div>
    </form>
  );
};
export default TodoForm