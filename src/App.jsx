import React from "react";
import { useCounterStore, useToggleStore } from "./zustand/store";

export const App = () => {
    const count = useCounterStore((state) => state.count);
    const showtext = useToggleStore((state) => state.showtext);

    const incrementCount = useCounterStore((state) => state.incrementCount);
    const decrementCount = useCounterStore((state) => state.decrementCount);
    const resetCount = useCounterStore((state) => state.resetCount);

    const toggleText = useToggleStore((state) => state.toggleText);

    return (
        <section>
            <h1>count: {count} </h1>
            <div className="btn-box">
                <button onClick={incrementCount}>increment</button>
                <button onClick={decrementCount}>decrement</button>
                <button onClick={resetCount}>reset</button>
            </div>
            <div>
                {showtext && <p>Lorem ipsum dolor sit amet.</p>}

                <button onClick={toggleText}>Toggle text</button>
            </div>
        </section>
    );
};
