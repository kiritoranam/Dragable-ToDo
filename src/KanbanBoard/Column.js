// src/Column.js
import React from 'react';
import Card from '../KanbanBoard/Card'
// import './Column.css';

const Column = ({ title, cards, onAddCard, onDeleteCard, onMoveCardLeft, onMoveCardRight }) => {
  let input;

  const handleAddCard = () => {
    debugger
    onAddCard(input.value);
    input.value = '';
  };

  return (
    <div className="column">
      <h5>{title}</h5>
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onDelete={onDeleteCard}
          onMoveLeft={onMoveCardLeft}
          onMoveRight={onMoveCardRight}
        />
      ))}
      <input type="text" ref={(node) => (input = node)} />
      <button onClick={handleAddCard}>Add Card</button>
    </div>
  );
};

export default Column;