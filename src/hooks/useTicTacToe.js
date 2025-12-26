import { useState } from "react";

const initialBoard = (size) => Array(size * size).fill(null);
function useTicTacToe(size) {
    const [board, setBoard] = useState(initialBoard(size));
    const [isNextX, setIsNextX] = useState(true);

    const WINNING_PATTERN = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const calculateWinner = () => {
        for (let i = 0; i < WINNING_PATTERN.length; i++) {
            const [a, b, c] = WINNING_PATTERN[i];
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                return board[a];
            }
        }
        return null;
    };
    const handleClick = (index) => {
        // check winner or alredy clicked
        const winner = calculateWinner();
        if (winner || board[index]) return;

        // if not winning case
        const newBoad = [...board];
        newBoad[index] = isNextX ? "X" : "O";
        setBoard(newBoad);
        setIsNextX((prev) => !prev);
    };
    const getStatusMessage = () => {
        const winner = calculateWinner();
        if (winner) return `Player ${winner} wins!`;
        return `Player ${isNextX ? "X" : "0"} turn`;
    };
    const resetGame = () => {
        setBoard(initialBoard(size));
        setIsNextX(true);
    };
    return { board, handleClick, getStatusMessage, resetGame };
}

export { useTicTacToe };
