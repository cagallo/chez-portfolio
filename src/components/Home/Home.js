import "./Home.scss";

const Home = () => {
	return (
		<main>
			<h2 className="intro">Hi, my name is</h2>
			<h1 className="name">Chez Gallo</h1>
			<p className="info">
				I am a software developer out of Denver, CO. I studied front-end
				development at the Turing School of Software and Design and I am
				currently a full stack engineer at
				<a
					href="https://www.coupa.com/"
					className="hyperlink"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					Coupa Software
				</a>
				.
			</p>
			<button>Get in Touch</button>
		</main>
	);
};

export default Home;
