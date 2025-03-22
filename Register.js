import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert('Please enter Username and Password');
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = existingUsers.some(user => user.username === username);

        if (userExists) {
            alert("User already exists.");
            return;
        }

        existingUsers.push({ username, password });
        localStorage.setItem('users', JSON.stringify(existingUsers));

        alert("Registration successful!");
        setUsername('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" id="username" className="form-control" placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" className="form-control" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    );
};

export default Register;