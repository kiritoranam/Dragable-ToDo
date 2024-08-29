// src/Board.js
import React, { useState } from 'react';
import Column from './Column';
// import './Board.css';

const Board = () => {
    const [columns, setColumns] = useState([
        { id: 1, title: 'To Do', cards: [] },
        { id: 2, title: 'In Progress', cards: [] },
        { id: 3, title: 'Done', cards: [] },
    ]);

    const addCard = (columnId, title) => {
        debugger
        setColumns(columns.map(column => {
            if (column.id === columnId) {
                return {
                    ...column,
                    cards: [...column.cards, { id: Date.now(), title }]
                };
            }
            return column;
        }));
    };

    const deleteCard = (columnId, cardId) => {
        debugger
        setColumns(columns.map(column => {
            if (column.id === columnId) {
                return {
                    ...column,
                    cards: column.cards.filter(card => card.id !== cardId)
                };
            }
            return column;
        }));
    };

    const moveCard = (cardId, direction) => {
        debugger
        let sourceColumnIndex, targetColumnIndex;
        const card = columns.flatMap((column, index) => {
            const card = column.cards.find(card => card.id === cardId);
            if (card) sourceColumnIndex = index;
            return card ? [card] : [];
        })[0];

        if (!card) return;

        targetColumnIndex = direction === 'left' ? sourceColumnIndex - 1 : sourceColumnIndex + 1;

        if (targetColumnIndex < 0 || targetColumnIndex >= columns.length) return;

        setColumns(columns.map((column, index) => {
            if (index === sourceColumnIndex) {
                return {
                    ...column,
                    cards: column.cards.filter(card => card.id !== cardId)
                };
            }
            if (index === targetColumnIndex) {
                return {
                    ...column,
                    cards: [...column.cards, card]
                };
            }
            return column;
        }));
    };

    return (
        <div className="board">
            {columns.map((column, index) => (
                <Column
                    key={column.id}
                    title={column.title}
                    cards={column.cards}
                    onAddCard={(title) => addCard(column.id, title)}
                    onDeleteCard={(cardId) => deleteCard(column.id, cardId)}
                    onMoveCardLeft={(cardId) => moveCard(cardId, 'left')}
                    onMoveCardRight={(cardId) => moveCard(cardId, 'right')}
                />
            ))}
        </div>
    );
};

export default Board;
