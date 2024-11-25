import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">404</h1>
                <p className="text-gray-600">Page Not Found</p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Go to Login
                </button>
            </div>
        </div>
    );
};

export default NotFound;
