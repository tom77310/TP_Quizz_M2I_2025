/* eslint-disable react/prop-types */
const Question = ({ question, onAnswer }) => {
  if (!question) return null;

  const answers = [...question.incorrect_answers, question.correct_answer].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      {answers.map((answer, index) => (
        <button
          key={index}
          className="mb-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-400"
          onClick={() => onAnswer(answer)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Question;
