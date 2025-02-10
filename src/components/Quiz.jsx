// import Question from './Question';
import { useState } from 'react';
function Quiz() {
	const [questions, setQuestions] = useState(['']);
	const [results, setResults] = useState([]);
	const quiz = async () => {
		const response = await fetch(
			`https://opentdb.com/api.php?amount=10&type=multiple${results}`
		);

		const data = await response.json();

		console.log(data);
		setResults(data.results);
	};

	return (
		<>
			{/* <Question /> */}
			<div>
				<div>
					<h1>{questions}</h1>
					<button
						onClick={quiz}					>
						Jeu classic
					</button>
				</div>
			</div>
		</>
	);
}

export default Quiz;
