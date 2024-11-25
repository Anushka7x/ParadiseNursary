import React, { useState } from "react";
import NewRequest from "./NewRequest";
import Trips from "./Trips";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"; // You can use a chart library for better visualization

const Dashboard = () => {
    const [activePage, setActivePage] = useState("dashboard");

    const menuItems = [
        { id: "dashboard", icon: "bi-speedometer2", label: "Dashboard" },
        { id: "newRequest", icon: "bi-plus-circle", label: "New Request" },
        { id: "myTrips", icon: "bi-briefcase", label: "My Trips" },
        { id: "reports", icon: "bi-file-text", label: "Reports" },
        { id: "settings", icon: "bi-gear", label: "Settings" },
    ];

    const renderContent = () => {
        switch (activePage) {
            case "dashboard":
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
                        <p className="mt-2 text-gray-700">Welcome to the Corporate Travel Management System.</p>
                        
                        {/* Example of a Statistics Card */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-semibold text-gray-800">Total Requests</h3>
                                <p className="text-3xl text-indigo-600">150</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-semibold text-gray-800">Approved Requests</h3>
                                <p className="text-3xl text-green-600">120</p>
                            </div>
                        </div>

                        {/* Example of a Line Chart for Data Visualization */}
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold">Requests Over Time</h3>
                            <LineChart width={500} height={300} data={dummyData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="requests" stroke="#8884d8" />
                            </LineChart>
                        </div>
                    </div>
                );
            case "newRequest":
                return <NewRequest />;
            case "myTrips":
                return <Trips />;
            case "reports":
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold">Reports</h2>
                        <p className="mt-2 text-gray-700">View detailed reports of your travel requests.</p>
                    </div>
                );
            case "settings":
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold">Settings</h2>
                        <p className="mt-2 text-gray-700">Manage your account and preferences here.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    // Example dummy data for the chart
    const dummyData = [
        { date: "2024-01-01", requests: 10 },
        { date: "2024-02-01", requests: 15 },
        { date: "2024-03-01", requests: 20 },
        { date: "2024-04-01", requests: 30 },
        { date: "2024-05-01", requests: 25 },
    ];

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="bg-indigo-800 text-white w-64 py-4 px-2">
                    <div className="text-xl font-bold px-4 mb-6">Travel Management</div>
                    <nav>
                        {menuItems.map((item) => (
                            <a
                                key={item.id}
                                onClick={() => setActivePage(item.id)}
                                className={`flex items-center px-4 py-2 mt-2 cursor-pointer rounded-lg ${
                                    activePage === item.id ? "bg-indigo-900" : "hover:bg-indigo-700"
                                }`}
                            >
                                <i className={`${item.icon} mr-3`}></i>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <header className="bg-white shadow">
                        <div className="px-4 py-6 flex justify-between items-center">
                            <h1 className="text-2xl font-semibold text-gray-900">Corporate Travel Management System</h1>
                            {/* Notifications or Profile Menu */}
                            <div className="relative">
                                <button className="text-gray-800 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                                    <i className="bi-bell"></i> Notifications
                                </button>
                            </div>
                        </div>
                    </header>
                    <main className="p-6 flex-1">{renderContent()}</main>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-indigo-800 text-white py-4">
                <div className="text-center">
                    <p className="text-sm">&copy; 2024 Corporate Travel Management. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;
