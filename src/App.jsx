import { useState } from "react";
import Question from "./components/Question";

const App = () => {
  const [stage, setStage] = useState("home"); // "home", "quiz", "result"
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Callback pour charger les questions depuis Question.jsx
  const handleQuestionsLoaded = (data) => setQuestions(data);

  // Gérer la réponse et passer à la question suivante
  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStage("result"); // Passer à la page résultat après la dernière question
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      {/* Page Home */}
      {stage === "home" && (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Bienvenue au Quizz !</h1>
          <button
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
            onClick={() => setStage("quiz")}
          >
            Commencer le Quiz
          </button>
        </div>
      )}

      {/* Page Quiz */}
      {stage === "quiz" && questions.length > 0 && (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">{questions[currentQuestionIndex].question}</h2>
          {[...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer]
            .sort(() => Math.random() - 0.5)
            .map((answer, index) => (
              <button
                key={index}
                className="mb-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-400"
                onClick={() => handleAnswer(answer)}
              >
                {answer}
              </button>
            ))}
        </div>
      )}
      
      {stage === "quiz" && questions.length === 0 && <Question onQuestionsLoaded={handleQuestionsLoaded} />}

      {/* Page Résultat */}
      {stage === "result" && (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Résultat</h1>
          <p className="text-xl mt-4">Score : {score} / {questions.length}</p>
          <button
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
            onClick={() => {
              setStage("home");
              setCurrentQuestionIndex(0);
              setScore(0);
            }}
          >
            Rejouer
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
