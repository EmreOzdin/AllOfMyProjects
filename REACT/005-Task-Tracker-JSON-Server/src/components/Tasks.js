import Duty from "./Duty";

const Tasks = ({ tasks, deleteTask, toggleDone }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Duty
          key={task.id}
          duty={task}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
};

export default Tasks;
