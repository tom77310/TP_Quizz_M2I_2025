/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Question from './Question';

const Quiz = ({ questions, currentQuestionIndex, setQuestions, onAnswer }) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController(); // Crée un contrôleur d'abandon
		const signal = controller.signal;

		if (questions.length === 0) {
			fetch('https://opentdb.com/api.php?amount=10&type=multiple', {
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

	if (loading) return <p>Chargement des questions...</p>;
	if (error) return <p className="text-red-500">Erreur : {error}</p>;
	if (!questions.length) return <p>Aucune question trouvée.</p>;

	return (
		<Question
			question={questions[currentQuestionIndex]}
			onAnswer={onAnswer}
		/>
	);
};

export default Quiz;
