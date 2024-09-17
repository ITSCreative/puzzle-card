import React, { useState } from 'react';

interface QuestionProps {
  cardIndex: number | null;
  setProgress: (updater: (prevProgress: string[]) => string[]) => void;
  setShowQuestion: (show: boolean) => void;
  handleReset: () => void;
}

const Question: React.FC<QuestionProps> = ({ cardIndex, setProgress, setShowQuestion, handleReset }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === 'correct') {
      setProgress((prevProgress: string[]) => {
        const newProgress = [...prevProgress, String(cardIndex)];
        localStorage.setItem('progress', JSON.stringify(newProgress));
        return newProgress;
      });
    }
  };

  return (
    <div className="question-modal">
  <h2>Question for card</h2>
  <div className="options">
    <button onClick={() => handleAnswer('correct')}>Option 1 (Correct)</button>
    <button onClick={() => handleAnswer('incorrect')}>Option 2 (Incorrect)</button>
    <button onClick={() => handleAnswer('incorrect')}>Option 3 (Incorrect)</button>
  </div>
  {selectedAnswer === 'incorrect' && <p className="error">Vuelve a intentarlo!</p>}
  <div className="actions">
    <button onClick={() => setShowQuestion(false)}>Volver al puzzle</button>
    <button onClick={handleReset}>Empezar de nuevo</button>
  </div>
</div>

  );
};

export default Question;
