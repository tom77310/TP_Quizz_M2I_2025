/* eslint-disable react/prop-types */
import styles from "./Home.module.css";
const Home = ({ onStart }) => {
	return (
		<div className="text-center">
			<h1>Prêt à tester tes connaissances ? </h1>
			<h2 className="sousTitreHome">Challenge-toi avec notre super quizz interactif !</h2>
			<p><strong>10 questions, 4 réponses, un seul survivant</strong><br />
			<strong>A la fin il n&apos;en restera qu&apos;un !</strong> <br />
			Réussiras-tu à atteindre le score parfait ?</p>
			<button
				onClick={onStart} className={styles.button}
			>
				C&apos;est partis !
			</button>
		</div>
	);
};

export default Home;
