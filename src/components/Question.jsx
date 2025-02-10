/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const fetchQuestions = async (onQuestionsLoaded) => {
  try {
    const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
    if (!response.ok) throw new Error(`Erreur ${response.status}: ${response.statusText}`);

    const data = await response.json();
    onQuestionsLoaded(data.results);
  } catch (error) {
    console.error("Erreur lors du chargement des questions :", error);
  }
};

const Question = ({ onQuestionsLoaded }) => {
  const hasFetched = useRef(false); // Empêche l'appel multiple

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchQuestions(onQuestionsLoaded);
    }
  }, [onQuestionsLoaded]);

  return null;
};

export default Question;

