import React from 'react';
import Card from './Card';

interface PuzzleBoardProps {
  cardsCount: number;
  progress: string[];
  setSelectedCard: (index: number) => void;
}

const PuzzleBoard: React.FC<PuzzleBoardProps> = ({ cardsCount, progress, setSelectedCard }) => {
  const cards = Array.from({ length: cardsCount }, (_, index) => index);

  return (
    <div className="background-image">
    <div className="puzzle-board">
      {cards.map((cardIndex) => (
        <Card
          key={cardIndex}
          index={cardIndex}
          isFlipped={progress.includes(String(cardIndex))}
          onClick={() => setSelectedCard(cardIndex)} // Llamar setSelectedCard al hacer clic en la carta
        />
      ))}
    </div>
    </div>
  );
};

export default PuzzleBoard;
