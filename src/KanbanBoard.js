// src/App.js
import React from 'react';
import Board from './KanbanBoard/Board';

function KanbanBoard() {
    return (
        <div className="KanbanBoard">
            <h6>Kanban Board</h6>
            <Board />
        </div>
    );
}

export default KanbanBoard;
