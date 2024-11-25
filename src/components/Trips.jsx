import React, { useState } from "react";

const Trips = () => {
    const [trips, setTrips] = useState([
        { id: 1, destination: "New York", date: "2024-11-25", status: "Pending" },
        { id: 2, destination: "Paris", date: "2024-12-10", status: "Approved" },
        { id: 3, destination: "Tokyo", date: "2025-01-15", status: "Rejected" },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setTrips((prevTrips) =>
            prevTrips.map((trip) =>
                trip.id === id ? { ...trip, status: newStatus } : trip
            )
        );
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">My Trips</h2>
            <table className="min-w-full border-collapse bg-white">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Destination</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {trips.map((trip) => (
                        <tr key={trip.id} className="border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{trip.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{trip.destination}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">{trip.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <select
                                    value={trip.status}
                                    onChange={(e) => handleStatusChange(trip.id, e.target.value)}
                                    className="px-3 py-1 rounded-full text-xs font-medium border"
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Trips;
