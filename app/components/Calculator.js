'use client'
import '../globals.css';
import React, { useState } from 'react';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(result) || '');
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setResult('');
        } else {
            setResult(result + value);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-200">
            <div className="bg-slate-400 p-6 rounded-xl shadow-lg w-72">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Calculator</h2>

                <input 
                    type="text" 
                    className="w-full p-3 text-2xl text-right border border-gray-300 rounded-lg mb-6 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={result} 
                    readOnly 
                />

                <div className="grid grid-cols-4 gap-2">
                    <button 
                        onClick={() => handleClick('7')} 
                        className="bg-gray-100 p-4 rounded-lg text-2xl font-bold text-gray-700 hover:bg-gray-300 transition duration-300"
                    >7</button>
                    <button 
                        onClick={() => handleClick('8')} 
                        className="bg-gray-100 p-4 rounded-lg text-2xl font-bold text-gray-700 hover:bg-gray-300 transition duration-300"
                    >8</button>
                    <button 
                        onClick={() => handleClick('9')} 
                        className="bg-gray-100 p-4 rounded-lg text-2xl font-bold text-gray-700 hover:bg-gray-300 transition duration-300"
                    >9</button>
                    <button 
                        onClick={() => handleClick('/')} 
                        className="bg-orange-500 text-white p-4 rounded-lg text-2xl font-bold hover:bg-orange-600 transition duration-300"
                    >/</button>

                    <button 
                        onClick={() => handleClick('4')} 
                        className="bg-gray-100 p-4 rounded-lg text-2xl font-bold text-gray-700 hover:bg-gray-300 transition duration-300"
                    >4</button>
                    <button 
                        onClick={() => handleClick('5')} 
                        className="bg-gray-100 p-4 rounded-lg text-2xl font-bold text-gray-700 hover:bg-gray-300 transition duration-300"
                    >5</button>
                    <button 
                        onClick={() => handleClick('6')} 
                        className="bg-gray-100 p-4 rounded-lg text-2xl font-bold text-gray-700 hover:bg-gray-300 transition duration-300"
                    >6</button>
                    <button 
                        onClick={() => handleClick('*')} 
                        className="bg-orange-500 text-white p-4 rounded-lg text-2xl font-bold hover:bg-orange-600 transition duration-300"
                    >*</button>

                    <button 
                        onClick={() => handleClick('1')} 
                        className="bg-gray-100 p-4 rounded-lg text-2xl font-bold text-gray-700 hover:bg-gray-300 transition duration-300"
                    >1</button>
                    <button 
                        onClick={() => handleClick('2')} 
                        className="bg-gray-100 p-4 rounded-lg text-2xl font-bold text-gray-700 hover:bg-gray-300 transition duration-300"
                    >2</button>
                    <button 
                        onClick={() => handleClick('3')} 
                        className="bg-gray-100 p-4 rounded-lg text-2xl font-bold text-gray-700 hover:bg-gray-300 transition duration-300"
                    >3</button>
                    <button 
                        onClick={() => handleClick('-')} 
                        className="bg-orange-500 text-white p-4 rounded-lg text-2xl font-bold hover:bg-orange-600 transition duration-300"
                    >-</button>

                    <button 
                        onClick={() => handleClick('0')} 
                        className="bg-gray-100 p-4 rounded-lg text-2xl font-bold text-gray-700 hover:bg-gray-300 transition duration-300"
                    >0</button>
                    <button 
                        onClick={() => handleClick('.')} 
                        className="bg-gray-100 p-4 rounded-lg text-2xl font-bold text-gray-700 hover:bg-gray-300 transition duration-300"
                    >.</button>

                    <button 
                        onClick={() => handleClick('=')} 
                        className="bg-blue-500 text-white p-4 rounded-lg text-2xl font-bold hover:bg-blue-600 transition duration-300 "
                    >=</button>
                    <button 
                        onClick={() => handleClick('+')} 
                        className="bg-orange-500 text-white p-4 rounded-lg text-2xl font-bold hover:bg-orange-600 transition duration-300"
                    >+</button>

                    <button 
                        onClick={() => handleClick('C')} 
                        className="col-span-4 bg-red-500 text-white p-4 rounded-lg text-2xl font-bold hover:bg-red-600 transition duration-300"
                    >C</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
