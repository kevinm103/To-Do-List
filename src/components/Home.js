import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import styles from "./styles";

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (data) {
      setTasks(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    const inputBox = document.getElementById("input-box");
    const inputValue = inputBox.value.trim();
    if (inputValue === "") {
      alert("You must write something");
    } else {
      setTasks([...tasks, { text: inputValue, checked: false }]);
    }
    inputBox.value = "";
  }

  function deleteTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  function toggleTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  }

  return (
    <div className="homepage" style={styles.container}>
      <h2>Welcome</h2>
      <div className="container" style={styles.container}>
        <TodoList
          tasks={tasks}
          addTask={addTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          styles={styles}
        />
      </div>
    </div>
  );
}

export default Home;
