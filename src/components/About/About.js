import "./About.scss";
import chezImg from "./chez-img.jpeg";

const About = () => {
	return (
		<section className="about">
			<header>
				<h1 className="about-header">02. About Me</h1>
			</header>
			<h2 className="hello">
				Hello, my name is Chez and I enjoy creating web applications.{" "}
			</h2>
			<div className="about-container">
        <div className="about-text">
          <p className="about-paragraph">
            I am a creative and resourceful software developer with a superior
            knack for problem solving and the ability to design, build and deliver
            quality software applications that meet the needs of the user. A team
            can count on me to have a considerable knowledge of web development,
            as well as the attitude and enthusiasm that it takes to create an
            exemplary application.
          </p>
          <p className="about-paragraph">
            As a software developer, I care immensely about design aspects such as
            accessibility. I strive to create tech with a diverse and inclusive
            team because I truly think the most powerful work is performed when
            one is surrounded by a progressive and visionary group of individuals.
            I hope to combine my love of problem solving with my liberal arts
            background in a creative manner that results in the production of
            innovative and inspiring code that positively impacts the world.
          </p>
          <p className="about-paragraph">
            I have an academic background in English Literature and I possess a
            breadth of experience ranging from owning and administrating a small
            business to being a private pilot. Before delving into software
            development, I was an office administrator for a small hotel software
            startup in Denver. Once I was exposed to the tech world—I was hooked!
            I loved that we were able to literally create anything through
            programming, using simply a keyboard. Additionally, I ran a small
            commercial printing business after graduating college and deeply
            enjoyed the ability to develop close relationships with our many
            repeat clients and the opportunities for innovation.
          </p>
          <p className="about-paragraph">
            In my spare time, I enjoy reading, poker, flying Cessnas and playing
            in the mountains. Feel free out to me with any questions!{" "}
          </p>
          <div className="technology-list">
            <h3 className='tech-header'>Technologies Used:</h3>
            <ul className="skills-list">
              <li>JavaScript(ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>GraphQL</li>
              <li>Postgres</li>
              <li>Express.js</li>
            </ul>
          </div>
        </div>
        <div className="about-picture">
          <img src={chezImg} alt='chez gallo 2021' className="chez-img"></img>
        </div>
			</div>
		</section>
	);
};

export default About;
