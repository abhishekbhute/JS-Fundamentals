// A debounce function is called after a specific amount of time passes since its last call.
import React, { useState } from 'react';
import './style.css';

export default function App() {
    const [value, setValue] = useState('');
    function debounce(callback, delay) {
        let timer;
        return function (...args) {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                callback(...args)
            }, delay)
        }
    }
    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
    };
    return (
        <div>
            <h1>Hello StackBlitz!</h1>
            <p>Start editing to see some magic happen :</p>
            {/* <StarRating /> */}
            {/* <Timer deadline={'December, 31, 2024'} /> */}
            <input type="text" onChange={debounce(handleChange, 500)} />
        </div>
    );
}
