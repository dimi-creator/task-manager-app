import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const TaskForm = ({ task, onTaskSubmit, onCancel }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setStatus(task.status);
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = { title, description, status };
        onTaskSubmit(task ? { ...taskData, id: task.id } : taskData);
        resetForm();
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setStatus('pending');
        onCancel();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    className="form-control"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">
                {task ? 'Update Task' : 'Create Task'}
            </button>
            <button type="button" className="btn btn-secondary" onClick={resetForm}>
                Cancel
            </button>
        </form>
    );
};

export default TaskForm;