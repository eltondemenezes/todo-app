import classes from "./TodoItem.module.css";

export default function TodoItem(props) {
  const iconClasses = `material-symbols-outlined ${classes.icon}`;

  return (
    <li id={props.id} className={classes.list}>
      <label>
        <input type="checkbox" onChange={() => props.onChange(props.id)} />
        <span className={props.checked && classes.listItem}>{props.title}</span>
      </label>
      {props.checked && (
        <span class={iconClasses} onClick={() => props.onClick(props.id)}>
          delete
        </span>
      )}
    </li>
  );
}
