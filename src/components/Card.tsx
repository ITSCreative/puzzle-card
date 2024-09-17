import React from 'react';

interface CardProps {
  index: number;
  isFlipped: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ index, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      {isFlipped ? (
        <span>{index + 1} - Unlocked!</span>
      ) : (
        <span>{index + 1}</span>
      )}
    </div>
  );
};

export default Card;
