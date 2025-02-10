/* eslint-disable react/prop-types */
import styles from './Question.module.css';

const Question = ({ question, onAnswer }) => {
  if (!question) return null;

  const answers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div className={styles.questionContainer}>
      <h2 className={styles.questionText}>{question.question}</h2>
      <div className={styles.answersContainer}>
        {answers.map((answer, index) => (
          <button
            key={index}
            className={styles.answerButton}
            onClick={() => onAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
