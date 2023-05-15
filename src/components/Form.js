import { useState } from "react";

import classes from "./Form.module.css";

export default function Form(props) {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.item(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        value={todo}
        placeholder="add details"
        onChange={handleChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}
