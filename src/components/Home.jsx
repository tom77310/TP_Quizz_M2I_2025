import styles from './Home.module.css';

function Home() {
	
	return (
		<>
			<h1>Prêt à tester tes connaissances ?</h1>
			<h2>Challenge-toi avec notre super quizz interactif !</h2>
			<p>
				10 questions, 4 réponses, un seul champion. Réussiras-tu à
				atteindre le score parfait ?
			</p>

			<button className={styles.button} onClick={() => {}}>
				
					Clique sur le boutton pour commencer ce bête de quiz !
				
			</button>

			
		</>
	);
}
export default Home;
