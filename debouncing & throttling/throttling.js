import React, { useState } from 'react';
import './style.css';

export default function App() {

    function throttling(callback, delay) {
        let run = false;
        return function (...args) {
            if (!run) {
                callback(...args)
                run = true
                setTimeout(() => run = false, delay)
            }
        }

    }
    const handleClick = () => {
        console.log('CLICKED');
    };

    return (
        <div>
            <button onClick={throttling(handleClick, 1000)}>CLICK ME</button>
        </div>
    );
}



// /**
//  * Creates a throttled function that only invokes the provided function
//  * at most once per every `delay` milliseconds
//  *
//  * @param {Function} func - The function to throttle
//  * @param {number} delay - The number of milliseconds to throttle invocations to
//  * @return {Function} Returns the new throttled function
//  */
// function throttle(func, delay) {
//   let lastCall = 0;
//   let lastResult;

//   return function (...args) {
//     let now = Date.now();
//     if (now - lastCall >= delay) {
//       lastCall = now
//       lastResult = func.apply(this, args)
//       return lastResult
//     }
//     return lastResult
//   }
// }
// const throttledFn = throttle(() => console.log('Function called!'), 1000);