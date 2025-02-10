import { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const App = () => {
  const [stage, setStage] = useState("home"); // "home", "quiz", "result"
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleQuestionsLoaded = (data) => setQuestions(data);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setStage("result"); // Aller à la page résultat
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      {stage === "home" && <Home onStart={() => setStage("quiz")} />}
      {stage === "quiz" && (
        <Quiz
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          setQuestions={setQuestions}
          onAnswer={handleAnswer}
        />
      )}
      {stage === "result" && (
        <Result score={score} total={questions.length} onRestart={() => {
          setStage("home");
          setCurrentQuestionIndex(0);
          setScore(0);
        }} />
      )}
    </div>
  );
};

export default App;
