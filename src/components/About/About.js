import './About.scss'

const About = () => {
    return (
        <section className='about'>
            <header>
                <h1 className='about-header'>02. About Me</h1>
            </header>
            <p>Hello, my name is Chez and I enjoy creating web applications. </p>
            <p>Technologies Used:</p>
            <ul className="skills-list">
                <li>JavaScript(ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>GraphQL</li>
                <li>Postgres</li>
                <li>Express.js</li>
            </ul>
        </section>
    )
}

export default About;