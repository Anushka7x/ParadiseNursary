import React, { useState } from "react";
import Dashboard from "./Dashboard";

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Please fill in all fields');
        }
    };

    if (isLoggedIn) return <Dashboard />;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Corporate Travel Management</h2>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <div className="rounded-md shadow-sm -space-y-px">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="appearance-none rounded-t-md w-full px-3 py-2 border border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="appearance-none rounded-b-md w-full px-3 py-2 border border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
