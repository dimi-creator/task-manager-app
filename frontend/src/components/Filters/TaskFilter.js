import React, { useState } from 'react';

const TaskFilter = ({ onFilterChange }) => {
    const [status, setStatus] = useState('');
    const [category, setCategory] = useState('');

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        onFilterChange(e.target.value, category);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        onFilterChange(status, e.target.value);
    };

    return (
        <div className="task-filter">
            <select value={status} onChange={handleStatusChange}>
                <option value="">All Statuses</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
            </select>
            <select value={category} onChange={handleCategoryChange}>
                <option value="">All Categories</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="shopping">Shopping</option>
            </select>
        </div>
    );
};

export default TaskFilter;