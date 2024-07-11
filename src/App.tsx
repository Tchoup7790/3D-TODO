import Todo from "./components/Todo";
import Task from "./models/Task";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";

interface AppProps {
  tasks: Array<Task>;
}

function App({ tasks }: AppProps) {
  const [tasks, setTasks] = useState(tasks);

  const taskList = tasks?.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
  ));

  function addTask(name: string) {
    const newTask = { id: "id", name, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <Form addTask={addTask} />
      <div>
        <FilterButton />
        <button type="button" aria-pressed="true">
          Show all tasks
        </button>
        <button type="button" aria-pressed="false">
          Show active tasks
        </button>
        <button type="button" aria-pressed="false">
          Show completed tasks
        </button>
      </div>
      <h2>3 tasks remaining</h2>
      <ul role="list" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
