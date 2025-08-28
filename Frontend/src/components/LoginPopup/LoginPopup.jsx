import React, { useState } from 'react';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all duration-300 scale-100 opacity-100">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] p-5 text-white flex justify-between items-center">
                    <h2 className="text-xl font-bold">{currState}</h2>
                    <button 
                        onClick={() => setShowLogin(false)}
                        className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-5">
                    <div className="space-y-4">
                        {currState === "Sign Up" && (
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition shadow-sm"
                                    required
                                />
                            </div>
                        )}
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition shadow-sm"
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition shadow-sm"
                                required
                            />
                        </div>
                        
                        {currState === "Sign Up" && (
                            <div className="flex items-start">
                                <div className="flex items-center h-5 mt-0.5">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        checked={agreeToTerms}
                                        onChange={() => setAgreeToTerms(!agreeToTerms)}
                                        className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="ml-2 text-xs">
                                    <label htmlFor="terms" className="text-gray-600">
                                        By continuing, I agree to the <span className="text-red-500 cursor-pointer hover:underline">terms of use</span> and <span className="text-red-500 cursor-pointer hover:underline">privacy policy</span>
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-5 bg-gradient-to-r from-red-600 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-600 transition-all shadow-md hover:shadow-lg"
                    >
                        {currState === "Login" ? "Login" : "Create Account"}
                    </button>

                    {/* Toggle between Login and Sign Up */}
                    <div className="mt-4 text-center">
                        <p className="text-xs text-gray-600">
                            {currState === "Login" 
                                ? "Don't have an account? " 
                                : "Already have an account? "}
                            <button
                                type="button"
                                onClick={() => setCurrState(currState === "Login" ? "Sign Up" : "Login")}
                                className="font-medium text-red-600 hover:text-red-500 transition-colors"
                            >
                                {currState === "Login" ? "Sign Up" : "Login"}
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPopup;