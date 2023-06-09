import React from "react";
import { useCounterStore } from "./zustand/store";

export const App = () => {
    const count = useCounterStore((state) => state.count);
    const incrementCount = useCounterStore((state) => state.incrementCount);
    const decrementCount = useCounterStore((state) => state.decrementCount);
    const resetCount = useCounterStore((state) => state.resetCount);

    return (
        <section>
            <h1>count: {count} </h1>
            <div className="btn-box">
                <button onClick={incrementCount}>increment</button>
                <button onClick={decrementCount}>decrement</button>
                <button onClick={resetCount}>reset</button>
            </div>
        </section>
    );
};
