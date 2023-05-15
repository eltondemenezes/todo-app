import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import classes from "./Home.module.css";

const TAB = [
  { id: 1, title: "All" },
  { id: 2, title: "Active" },
  { id: 3, title: "Completed" },
];

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [tabId, setTabId] = useState(1);

  const handleItem = (item) => {
    setTodoList((prevState) => [
      { item: item, checked: false, id: Math.random().toString() },
      ...prevState,
    ]);
  };

  const handleChecked = (id) => {
    const updatedToDos = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      } else {
        return todo;
      }
    });

    setTodoList(updatedToDos);
  };

  const handleDelete = (id) => {
    const deletedToDos = todoList.filter((todo) => todo.id !== id);
    setTodoList(deletedToDos);
  };

  const handleTabId = (id) => {
    setTabId(id);
  };

  const tabs = TAB.map((item) => (
    <li
      key={item.id}
      onClick={() => handleTabId(item.id)}
      className={tabId === item.id ? classes.activeTab : classes.tab}
    >
      {item.title}
    </li>
  ));

  const active = todoList.filter((todo) => todo.checked === false);
  const completed = todoList.filter((todo) => todo.checked === true);

  const deleteAllHandle = () => {
    const updatedList = todoList.filter((todo) => todo.checked !== true);
    setTodoList(updatedList);
  };

  return (
    <div className={classes.main}>
      <h1>#todo</h1>
      <ul className={classes.tabContainer}>{tabs}</ul>
      <Form item={handleItem} />
      {tabId === 1 && (
        <TodoList
          todoList={todoList}
          onChecked={handleChecked}
          onDelete={handleDelete}
        />
      )}
      {tabId === 2 && (
        <TodoList
          todoList={active}
          onChecked={handleChecked}
          onDelete={handleDelete}
        />
      )}
      {tabId === 3 && (
        <>
          <TodoList
            todoList={completed}
            onChecked={handleChecked}
            onDelete={handleDelete}
          />
          <button onClick={deleteAllHandle} className={classes.deleteButton}>
            Delete All
          </button>
        </>
      )}
    </div>
  );
}
