/* eslint-disable react/prop-types */
const Result = ({ score, total, onRestart }) => {
	return (
		<>
		<div className="{styles.resultContainer}">
			<h1 className="{styles.resultTitle}">Résultat</h1>
			<p className="{styles.scoreText}">
				Score : {score} / {total}
			</p>
			<p className="{styles.feedbackText}">
				{score <= 4 ? "Oups, tu peux mieux faire" : score <= 7 ? "Pas mal, tu t'en sors bien !" : "Félicitations, tu es un expert !"}	
			</p>
			<button className="{styles.restartButton}" onClick={onRestart}>
				Rejouer
			</button>
		</div>
		</>
	);
};

export default Result;
