/* eslint-disable react/prop-types */
const Result = ({ score, total, onRestart }) => {
	return (
		<div className="text-center">
			<h1 className="text-3xl font-bold">Résultat</h1>
			<p className="text-xl mt-4">
				Score : {score} / {total}
			</p>
			<button
				className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
				onClick={onRestart}
			>
				Rejouer
			</button>
		</div>
	);
};

export default Result;
