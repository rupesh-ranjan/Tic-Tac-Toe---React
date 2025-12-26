import { useTicTacToe } from "../hooks/useTicTacToe";

function TicTacToe({ size = 3 }) {
    const { board, handleClick, getStatusMessage, resetGame } =
        useTicTacToe(size);
    return (
        <div className="game" style={{ "--board-size": size }}>
            <div className="status">
                {getStatusMessage()}
                <button className="reset-button" onClick={resetGame}>
                    Reset Game
                </button>
            </div>
            <div className="board">
                {board.map((b, i) => (
                    <button
                        key={i}
                        className="cell"
                        onClick={() => handleClick(i)}
                        disabled={b !== null}
                    >
                        {b}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TicTacToe;
