import React from "react";
import { useCounterStore, useToggleStore, useUserStore } from "./zustand/store";

export const App = () => {
    const count = useCounterStore((state) => state.count);
    const showtext = useToggleStore((state) => state.showtext);
    const { userinfo, updateUserinfo } = useUserStore();

    const incrementCount = useCounterStore((state) => state.incrementCount);
    const decrementCount = useCounterStore((state) => state.decrementCount);
    const resetCount = useCounterStore((state) => state.resetCount);

    const toggleText = useToggleStore((state) => state.toggleText);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        updateUserinfo({
            name: e.target.username.value,
            age: e.target.age.value,
            email: e.target.email.value,
        });
    };

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
            <div>
                <h1>userinfo</h1>
                <div>
                    <h2>name: {userinfo.name}</h2>
                    <h3>email :{userinfo.email}</h3>
                    <p>age : {userinfo.age}</p>
                </div>
            </div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                    />
                </label>
                <br />
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                    />
                </label>
                <br />
                <button type="submit">Update Info</button>
            </form>
        </section>
    );
};
