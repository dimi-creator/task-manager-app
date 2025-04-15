import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from '../components/Tasks/TaskList';
import TaskForm from '../components/Tasks/TaskForm';
import TaskFilter from '../components/Filters/TaskFilter';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/tasks');
                if (response.status !== 200) {
                    throw new Error('Failed to fetch tasks');
                }
                setTasks(response.data);
                setFilteredTasks(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setFilteredTasks([...tasks, newTask]);
    };

    const handleUpdateTask = (updatedTask) => {
        const updatedTasks = tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
    };

    const handleFilterTasks = (filtered) => {
        setFilteredTasks(filtered);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm onAddTask={handleAddTask} />
            <TaskFilter tasks={tasks} onFilterTasks={handleFilterTasks} />
            <TaskList 
                tasks={filteredTasks} 
                onUpdateTask={handleUpdateTask} 
                onDeleteTask={handleDeleteTask} 
            />
        </div>
    );
};

export default Tasks;