import styles from "./components/Home.module;
const Home = ({ onStart }) => {
	return (
		<div className="text-center">
			<h1 className="text-3xl font-bold">Bienvenue au Quizz !</h1>
			<button
				className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
				onClick={onStart}
			>
				Commencer le Quiz
			</button>
		</div>
	);
};

export default Home;
