/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Question from './Question';
import './Quiz.module.css';

const Quiz = ({ questions, currentQuestionIndex, setQuestions, onAnswer }) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController(); // Crée un contrôleur d'abandon
		const signal = controller.signal;

		if (questions.length === 0) {
			fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple', {
				signal,
			})
				.then((response) => {
					if (!response.ok)
						throw new Error(`Erreur ${response.status}`);
					return response.json();
				})
				.then((data) => {
					setQuestions(data.results);
					setLoading(false);
				})
				.catch((error) => {
					if (error.name !== 'AbortError') {
						console.error(
							'Erreur de chargement des questions :',
							error
						);
						setError(error.message);
						setLoading(false);
					}
				});
		} else {
			setLoading(false);
		}

		return () => controller.abort(); // Annule la requête si le composant est démonté
	}, []);

	if (loading) return <div className="{styles.loading}">Chargement...</div>;
	if (error) return <div className="{styles.error}">Erreur : {error}</div>;
	if (!questions.length)
		return <div className="error">Aucune question trouvée.</div>;

	return (
		<div className="{styles.quizContainer}">
			{loading ? <div className="{styles.loading}">Chargement...</div> : null}
			{error ? <div className="{styles.error}">Erreur: {error}</div> : null}
			<Question
				question={questions[currentQuestionIndex]}
				onAnswer={onAnswer}
			/>
		</div>
	);
};

export default Quiz;
