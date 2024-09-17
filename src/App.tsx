import React, { useState, useEffect } from 'react';
import PuzzleBoard from './components/PuzzleBoard';
import Question from './components/Question';
import { getStoredProgress, resetProgress } from './logic/utils';

const App: React.FC = () => {
  const [progress, setProgress] = useState<string[]>([]);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [cardsCount, setCardsCount] = useState<number>(60);
  const [showQuestion, setShowQuestion] = useState(false);

  useEffect(() => {
    const storedProgress = getStoredProgress();
    if (storedProgress) {
      setProgress(storedProgress);
    }
  }, []);

  const updateProgress = (updater: (prevProgress: string[]) => string[]) => {
    setProgress((prevProgress) => updater(prevProgress));
  };

  const handleReset = () => {
    resetProgress();
    setProgress([]);
    setCardsCount(60);
    setShowQuestion(false);
  };

  const handleCardClick = (cardIndex: number) => {
    setSelectedCard(cardIndex);  // Guardamos el índice de la carta seleccionada
    setShowQuestion(true);       // Mostramos el componente de preguntas
  };

  return (
    <div className="app-container">
      <PuzzleBoard
        cardsCount={cardsCount}
        progress={progress}
        setSelectedCard={handleCardClick}  // Pasamos la función que maneja el clic
      />
      {showQuestion && selectedCard !== null && (
        <Question
          cardIndex={selectedCard}
          setProgress={updateProgress}
          setShowQuestion={setShowQuestion}
          handleReset={handleReset}
        />
      )}
    </div>
  );
};

export default App;
