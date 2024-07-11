
import React, { useState, useEffect } from 'react';
import "../App.css";

const Model = () => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState('All Tasks');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setTask('');
    setEditIndex(null);
  };

  const handleAddTask = () => {
    if (task) {
      const newTask = {
        text: task,
        time: new Date().toLocaleTimeString(),
        done: false,
      };
      if (editIndex !== null) {
        const updatedTasks = tasks.map((t, index) =>
          index === editIndex ? newTask : t
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, newTask]);
      }
      setTask('');
      handleCloseModal();
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  
  const handleEditTask = (index) => {
    setTask(tasks[index].text);
    setEditIndex(index);
    handleShowModal();
  };

  const handleDoneTask = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All Tasks') return true;
    if (filter === 'Upcoming Tasks') return !task.done;
    if (filter === 'In Progress') return !task.done;
    if (filter === 'Completed Tasks') return task.done;
    return true;
  });

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo" onClick={toggleSidebar}>
          Good Morning
        </div>
        <button className="btn" onClick={handleShowModal}>
          Open Modal
        </button>
      </nav>

      <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <div className="sidebar-item" onClick={() => setFilter('All Tasks')}>All Tasks</div>
        <div className="sidebar-item" onClick={() => setFilter('Upcoming Tasks')}>Upcoming Tasks</div>
        <div className="sidebar-item" onClick={() => setFilter('In Progress')}>In Progress</div>
        <div className="sidebar-item" onClick={() => setFilter('Completed Tasks')}>Completed Tasks</div>
        <div className="sidebar-item clock">
          {time}
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <input
              type="text"
              placeholder="Enter task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn" onClick={handleAddTask}>
              {editIndex !== null ? 'Update Task' : 'Add Task'}
            </button>
            <button className="btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="tasks">
        <h3>{filter}</h3>
        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index} className={task.done ? 'done' : ''}>
              <span>{task.text}</span>
              <span>{task.time}</span>
              <button className="btn" onClick={() => handleEditTask(index)}>
                Edit
              </button>
              <button className="btn" onClick={() => handleDoneTask(index)}>
                {task.done ? 'Undo' : 'Done'}
              </button>
              <button className="btn" onClick={() => handleDeleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer">
        <p>Footer Content</p>
      </div>
    </div>
  );
};

export default Model;
