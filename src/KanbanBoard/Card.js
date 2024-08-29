// src/Card.js
import React from 'react';
// import './Card.css';

const Card = ({ card, onDelete, onMoveLeft, onMoveRight }) => {
    return (
        <div className="card">
            <p>{card.title}</p>
            <button onClick={() => onMoveLeft(card.id)}>←</button>
            <button onClick={() => onMoveRight(card.id)}>→</button>
            <button onClick={() => onDelete(card.id)}>Delete</button>
        </div>
    );
};

export default Card;
