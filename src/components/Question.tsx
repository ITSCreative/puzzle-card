import React, { useState } from 'react';
import Confetti from 'react-confetti';

// Constante con las preguntas y respuestas
const questions = [
  {
    question: "Cómo evaluas el balance entre información educativa y entretenimiento en la experiencia?",
    options: ["Muy bien equilibrado", "Poco equilibrado"],
    correctAnswers: [],
    isSpecial: false // Pregunta de respuesta única
  },
  {
    question: "Qué tan intuitivo te resultó el uso de la tecnología durante tu visita?",
    options: ["Muy fácil de usar", "Algo confuso en algunas áreas", "Difícil de entender sin ayuda"],
    correctAnswers: [],
    isSpecial: false

  },
  {
    question: "Como te enteraste del evento?",
    options: ["Redes Sociales", "Ví el evento desde la calle", "Amigos", "Familiares"],
    correctAnswers: [],
    isSpecial: false
  },
  {
    question: "En qué técnica ves las obras en movimiento?",
    options: ["Salas Inmersivas", "Stop-motion", "Pinturas Movil"],
    correctAnswers: ["Salas Inmersivas"],
    isSpecial: true
  },
  {
    question: "Cuál es el propósito principal del arte interactivo?",
    options: ["Confundir al visitante", "Hacer que el arte se vea más caro", "Involucrar al visitante en la obra de arte"],
    correctAnswers: ["Involucrar al visitante en la obra de arte"],
    isSpecial: true
  },
  {
    question: "En que consiste la realidad aumentada?",
    options: ["Se puede interactuar con la obra", "Son Figuras y modelos 3D de las obras", "Son videos de las obras en movimiento"],
    correctAnswers: ["Son Figuras y modelos 3D de las obras"],
    isSpecial: true
  },
  {
    question: "Qué tanto tiempo te habría gustado pasar en cada exhibición?",
    options: ["Más tiempo en cada una", "El tiempo fue adecuado", "Menos tiempo, algunas eran largas"],
    correctAnswers: [],
    isSpecial: false
  },
  {
    question: "Qué técnicas fueron aplicadas dentro del evento?",
    options: [ "Ilustración, Arte Conceptual", "Ilustración Tradicional, Ilustraciones planas", "Video Mapping, Arte colaborativo"],
    correctAnswers: ["Video Mapping, Arte colaborativo"],
    isSpecial: true
  },
  {
    question: "Qué tan satisfecho te sientes con la duración de la experiencia?",
    options: ["Muy satisfecho", "Algo insatisfecho, fue corta", "Insatisfecho, fue muy larga"],
    correctAnswers: [],
    isSpecial: false
  },
  {
    question: "Cómo se llama la técnica para interactuar con las obras?",
    options: ["Pintura tradicional", "Escultura congelada", "Arte interactivo"],
    correctAnswers: ["Arte interactivo"],
    isSpecial: true
  },
/*
10 primeras preguntas
*/
  {
    question: "La realidad aumentada hace que la obra de arte se vea 3D en el espacio?",
    options: ["Verdadero", "Falso"],
    correctAnswers: ["Verdadero"],
    isSpecial: true
  },

  {
    question: "Viniste acompañado?",
    options: ["Vine con mi pareja <3", "Vine con mi familia :)", "Vine con mis amigos :D", "No, solo solín solito :c"],
    correctAnswers: [],
    isSpecial: false
  },
  {
    question: "Qué es un museo inmersivo?",
    options: ["Un lugar donde solo se exponen pinturas antiguas", "Un museo donde puedes experimentar el arte de manera envolvente", "Una tienda de regalos en la entrada de un museo"],
    correctAnswers: ["Un museo donde puedes experimentar el arte de manera envolvente"],
    isSpecial: true
  },
  {
    question: "Cuál de estos es una técnica de arte inmersivo?",
    options: ["Fotocopiar cuadros", "Dibujar con lápices de colores", "Realidad aumentada"],
    correctAnswers: ["Realidad aumentada"],
    isSpecial: true
  },
  {
    question: "Los museos inmersivos permiten al visitante ser parte de la obra?",
    options: ["Verdadero", "Falso"],
    correctAnswers: ["Verdadero"],
    isSpecial: true
  },
  {
    question: "Te gustó esta experiencia?",
    options: ["Sí, la amé <3", "No"],
    correctAnswers: [],
    isSpecial: false
  },
  {
    question: "Cómo ayuda la realidad aumentada en un museo inmersivo?",
    options: ["Añadiendo elementos digitales que se superponen a la realidad física", "Cambiando los colores de las obras permanentemente", "Reemplazando por completo las obras físicas"],
    correctAnswers: ["Añadiendo elementos digitales que se superponen a la realidad física"],
    isSpecial: true
  },{
    question: "Qué tipo de arte suele incluir un museo inmersivo?",
    options: ["Solo pintura clásica", "Arte interactivo y digital", "Únicamente esculturas de gran tamaño"],
    correctAnswers: [],
    isSpecial: false
  },{
    question: "Cual es el nombre del museo inmersivo?",
    options: ["Van Gogh", "Histeria Viva", "SumergeTEC", "Historia Viva"],
    correctAnswers: ["Historia Viva"],
    isSpecial: true
  },
  {
    question: "Te gustaría visitar otro museo o evento de este tipo?",
    options: ["Sí, definitivamente", "Tal vez, dependiendo del tema", "No, prefiero experiencias más tradicionales"],
    correctAnswers: [],
    isSpecial: false
  },
/*
Últimas 30 preguntas
*/
  {
    question: "Te gustaria que se hiciera un evento similar pero con temática diferente?",
    options: ["Si, me gustaria", "Me gustó mucho la temática actual"],
    correctAnswers: [],
    isSpecial: false
  },

  {
    question: "Cuál era la temática del evento?",
    options: ["Obras Religiosas", "Arte Urbano", "Futurismo"],
    correctAnswers: ["Obras Religiosas"],
    isSpecial: true
  },
  {
    question: "Qué tan inmersivas te resultaron las experiencias en el museo?",
    options: ["Muy inmersiva", "Medianamente inmersiva", "Poco inmersiva"],
    correctAnswers: [],
    isSpecial: false
  },
  {
    question: "Qué aspecto de la visita te resultó más atractivo o memorable?",
    options: ["La interacción con el arte", "La tecnología empleada (proyectores, realidad aumentada, etc.)", "La ambientación y el diseño del espacio"],
    correctAnswers: [],
    isSpecial: false
  },
  {
    question: "En que consiste el arte colaborativo?",
    options: ["Son proyecciones en muros", "Son animaciones", "Varias personas pueden juntarse para formar la obra", "No había en la exposición"],
    correctAnswers: ["Varias personas pueden juntarse para formar la obra"],
    isSpecial: true
  },
  {
    question: "Qué elemento mejorarías en la experiencia??",
    options: ["El diseño y ambientación de las salas", "La claridad de las instrucciones para interactuar", "Más tiempo en cada exhibición"],
    correctAnswers: [],
    isSpecial: false
  },
  {
    question: "Volverías a recomendar este museo inmersivo a tus amigos o familiares?",
    options: [" Sí, definitivamente", "Tal vez, dependiendo de la persona", "No >:C"],
    correctAnswers: [],
    isSpecial: false
  },
  {
    question: "Qué tan fácil fue para ti interactuar con las exhibiciones??",
    options: ["Muy fácil", "Algo complicado", "Muy difícil"],
    correctAnswers: [],
    isSpecial: false
  },
  {
    question: "Cómo evaluas la combinación entre arte y tecnología en esta experiencia?",
    options: ["Muy equilibrada", "Bien, pero podría mejorar", "Desbalanceada, uno destaca más que el otro"],
    correctAnswers: [],
    isSpecial: false
  },
  {
    question: "Nos visitas de otro lado o provienes de la ciudad de Cuenca?",
    options: ["Soy de Cuenca!", "Soy de otro cantón", "Soy de otra provincia", "Soy de otro país"],
    correctAnswers: [],
    isSpecial: false
  },
];


interface QuestionProps {
  cardIndex: number | null;
  setProgress: (updater: (prevProgress: string[]) => string[]) => void;
  setShowQuestion: (show: boolean) => void;
  handleReset: () => void;
}

const Question: React.FC<QuestionProps> = ({ cardIndex, setProgress, setShowQuestion, handleReset }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState<string[]>([]); // Nuevo estado para respuestas incorrectas

  const question = cardIndex !== null ? questions[cardIndex] : null;

  const handleAnswerToggle = (answer: string) => {
    const newSelectedAnswers = selectedAnswers.includes(answer)
      ? selectedAnswers.filter((a) => a !== answer)
      : [...selectedAnswers, answer];
    setSelectedAnswers(newSelectedAnswers);

    // Lógica de respuesta

    if (!question?.isSpecial) {
      setProgress((prevProgress: string[]) => {
        const newProgress = [...prevProgress, String(cardIndex)];
        localStorage.setItem("progress", JSON.stringify(newProgress));
        return newProgress;
      });
      setShowConfetti(true); // Activa el confeti
      setTimeout(() => setShowQuestion(false), 2000); // Cierra el modal después de 2 segundos
    } else {
      const allCorrect = newSelectedAnswers.every((answer) =>
        question?.correctAnswers.includes(answer)
      );
      const noExtraIncorrect = newSelectedAnswers.length === question?.correctAnswers.length;

      if (allCorrect && noExtraIncorrect) {
        setProgress((prevProgress: string[]) => {
          const newProgress = [...prevProgress, String(cardIndex)];
          localStorage.setItem("progress", JSON.stringify(newProgress));
          return newProgress;
        });
        setError(false);
        setShowConfetti(true);
        setTimeout(() => setShowQuestion(false), 2000);
      } else {
        setError(true);
        setIncorrectAnswers((prev) => [...prev, answer]); // Agrega la respuesta incorrecta
      }
    }
  };

  const handleRetry = () => {
    setSelectedAnswers([]);
    setError(false);
    setIncorrectAnswers([]); // Restablece las respuestas incorrectas
  };

  return (
    <>
      {showConfetti && (
        <div className="confetti-container">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            gravity={20}
            tweenDuration={1700}
            recycle={false}
          />
        </div>
      )}
      <button className="close-button" onClick={() => setShowQuestion(false)}>✕</button>
      <div className="question-modal">
        {question && (
          <>
            <h2>{question.question}</h2>
            <div className="options">
              {question.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerToggle(option)}
                  className={`${selectedAnswers.includes(option) ? "selected" : ""} ${
                    incorrectAnswers.includes(option) ? "incorrect" : ""
                  }`} // Aplica clase incorrecta si está en respuestas incorrectas
                >
                  {option}
                </button>
              ))}
            </div>
            {error && <p className="error">¿Reintentar?</p>}
            <div className="actions">
              <button onClick={handleRetry}>Reintentar!!</button>
              <button onClick={handleReset}>¿Reiniciar toda la tabla?</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Question;