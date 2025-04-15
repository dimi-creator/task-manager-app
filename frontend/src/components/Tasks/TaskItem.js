import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
    return (
        <div className="task-item">
            <h3 className={task.completed ? 'completed' : ''}>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => onToggle(task.id)}>
                {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <button onClick={() => onEdit(task.id)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default TaskItem;