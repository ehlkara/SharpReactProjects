function TaskShow({ task, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  console.log(task);
  return (
    <div className="task-show">
      <h3 className="task-title">Your Tak</h3>
      <p>{task.title}</p>
      <h3 className="task-title">Task List</h3>
      <p>{task.taskDesc}</p>
      <div>
        <button className="task-delete" onClick={handleDeleteClick}>
          Delete
        </button>
        <button className="task-edit">Update</button>
      </div>
    </div>
  );
}

export default TaskShow;
