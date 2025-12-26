import { useState } from "react";
import "./App.css";
import TicTacToe from "./components/TicTacToe";

function App() {
    const [size, setSize] = useState(3);
    return (
        <>
            <h1>Tic Tac Toe</h1>
            <label className="input-board-size">
                <div>
                    Choose Board Size:
                    <input
                        type="number"
                        min="3"
                        max="10"
                        value={size}
                        className="input-board"
                        onChange={(e) => setSize(parseInt(e.target.value))}
                    />
                </div>
                <p>
                    Board Size: {size} x {size}
                </p>
            </label>

            <TicTacToe size={size} />
        </>
    );
}

export default App;
