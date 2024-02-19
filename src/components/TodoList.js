import React from "react";

function TodoList({ tasks, addTask, deleteTask, toggleTask, styles }) {
  return (
    <div className="todo-app" style={styles.todoApp}>
      <h2 style={styles.todoAppH2}>
        To-Do List
      </h2>
      <div className="row" style={styles.row}>
        <input type="text" id="input-box" placeholder="Add your text" style={styles.input} />
        <button onClick={addTask} style={styles.button}>Add</button>
      </div>
      <ul id="list-container">
        {tasks.map((task, index) => (
          <li key={index} style={task.checked ? styles.ulLiChecked : styles.ulLi} onClick={() => toggleTask(index)}>
            {task.text}
            <span onClick={(e) => { e.stopPropagation(); deleteTask(index); }} style={styles.ulLiSpan}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
