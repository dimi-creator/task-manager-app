import React from 'react';
import { Link } from 'react-router-dom';
import  useAuth  from '../hooks/useAuth';

const Home = () => {
    const { user } = useAuth();

    return (
        <div className="container">
            <h1>Welcome to the Task Manager App</h1>
            {user ? (
                <div>
                    <h2>Hello, {user.name}!</h2>
                    <p>
                        You can manage your tasks <Link to="/tasks">here</Link>.
                    </p>
                </div>
            ) : (
                <div>
                    <p>Please <Link to="/login">log in</Link> or <Link to="/register">register</Link> to get started.</p>
                </div>
            )}
        </div>
    );
};

export default Home;