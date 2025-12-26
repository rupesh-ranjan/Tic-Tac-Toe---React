import { useState } from "react";
import "./App.css";
import TicTacToe from "./components/TicTacToe";

function App() {
    const [size, setSize] = useState(3);
    const displaySize = !size || size < 3 ? 3 : size > 7 ? 7 : size;

    return (
        <>
            <h1>Tic Tac Toe</h1>
            <label className="input-board-size">
                <div>
                    Choose Board Size:
                    <input
                        type="number"
                        min="3"
                        max="7"
                        value={size === 0 ? "" : size}
                        className="input-board"
                        onChange={(e) => {
                            const value =
                                e.target.value === ""
                                    ? 0
                                    : parseInt(e.target.value);
                            setSize(value);
                        }}
                    />
                </div>
                <p>
                    Board Size: {displaySize} x {displaySize}
                </p>
            </label>

            <TicTacToe size={displaySize} />
        </>
    );
}

export default App;
