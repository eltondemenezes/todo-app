import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

export default function TodoList({ todoList, onChecked, onDelete }) {
  const list = todoList.map((item) => (
    <TodoItem
      key={item.id}
      title={item.item}
      id={item.id}
      checked={item.checked}
      onChange={onChecked}
      onClick={onDelete}
    />
  ));

  return <ul className={classes.unorderedlist}>{list}</ul>;
}
