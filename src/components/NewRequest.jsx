import React, { useState } from "react";


const NewRequest = () => {
    const [formData, setFormData] = useState({
        destination: "",
        purpose: "",
        startDate: "",
        endDate: "",
        comments: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!formData.destination) newErrors.destination = "Destination is required";
        if (!formData.purpose) newErrors.purpose = "Purpose is required";
        if (!formData.startDate) newErrors.startDate = "Start date is required";
        if (!formData.endDate) newErrors.endDate = "End date is required";
        else if (new Date(formData.startDate) > new Date(formData.endDate)) {
            newErrors.endDate = "End date must be after the start date";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSuccessMessage("Travel request submitted successfully!");
            setFormData({
                destination: "",
                purpose: "",
                startDate: "",
                endDate: "",
                comments: "",
            });
            setErrors({});
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">New Travel Request</h2>
            {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                        Destination
                    </label>
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md border ${
                            errors.destination ? "border-red-500" : "border-gray-300"
                        } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    {errors.destination && <p className="text-red-500 text-sm">{errors.destination}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
                        Purpose
                    </label>
                    <input
                        type="text"
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md border ${
                            errors.purpose ? "border-red-500" : "border-gray-300"
                        } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    {errors.purpose && <p className="text-red-500 text-sm">{errors.purpose}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                        Start Date
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md border ${
                            errors.startDate ? "border-red-500" : "border-gray-300"
                        } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                        End Date
                    </label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded-md border ${
                            errors.endDate ? "border-red-500" : "border-gray-300"
                        } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                        Additional Comments
                    </label>
                    <textarea
                        id="comments"
                        name="comments"
                        rows="4"
                        value={formData.comments}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                    Submit Request
                </button>
            </form>
        </div>
    );
};

export default NewRequest;
