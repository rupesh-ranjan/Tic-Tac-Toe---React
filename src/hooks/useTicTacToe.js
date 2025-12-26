import { useMemo, useState, useEffect } from "react";

function useTicTacToe(size) {
    const initialBoard = (size) => Array(size * size).fill(null);
    const [board, setBoard] = useState(initialBoard(size));
    const [isNextX, setIsNextX] = useState(true);

    useEffect(() => {
        setBoard(initialBoard(size));
        setIsNextX(true);
    }, [size]);

    const generateWinningPattern = useMemo(() => {
        const pattern = [];

        // horizontal and vertical
        for (let i = 0; i < size; i++) {
            const horiznotal = [];
            const vertical = [];
            for (let j = 0; j < size; j++) {
                horiznotal.push(i * size + j);
                vertical.push(i + j * size);
            }
            pattern.push(horiznotal, vertical);
        }

        // diagonal
        const diagonal1 = [];
        const diagonal2 = [];
        for (let i = 0; i < size; i++) {
            diagonal1.push(i + i * size); // 0,5,10,11
            diagonal2.push((size - 1) * (i + 1)); // 3, 6, 9, 12
        }
        pattern.push(diagonal1, diagonal2);
        return pattern;
    }, [size]);
    // 3, 6, 9, 12
    //  -> 3 * 1 -> 3
    // (size - 1) * (i + 1) -> 3 * 2 -> 6
    // (size - 1) * (i + 1) -> 3 * 3 -> 9
    // (size - 1) * (i + 1) -> 3 * 4 -> 12

    const WINNING_PATTERN = generateWinningPattern;

    const calculateWinner = () => {
        for (let i = 0; i < WINNING_PATTERN.length; i++) {
            const pattern = WINNING_PATTERN[i];
            let countX = 0;
            let countO = 0;
            pattern.forEach((index) => {
                if (board[index] === "X") countX++;
                else if (board[index] === "O") countO++;
            });

            if (countX === size) return "X";
            if (countO === size) return "O";

            // const [a, b, c] = WINNING_PATTERN[i];
            // if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            //     return board[a];
            // }
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
        const isBoardFull = board.every((cell) => cell !== null);
        if (isBoardFull) return "It's a draw!";
        return `Player ${isNextX ? "X" : "0"} turn`;
    };
    const resetGame = () => {
        setBoard(initialBoard(size));
        setIsNextX(true);
    };
    return { board, handleClick, getStatusMessage, resetGame };
}

export { useTicTacToe };
