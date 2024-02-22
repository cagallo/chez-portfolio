import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { myProjects } from '../../data/projects';
import './Work.scss';

const Work = () => {
  // eslint-disable-next-line no-unused-vars
  const [projects, setProjects] = useState(myProjects);
  // const [error, setError] = useState("");

  // const fetchProjects = async () => {
  // 	const url = "https://chez-portfolio-api.herokuapp.com/projects";
  // 	setError("");

  // 	try {
  // 		const response = await fetch(url);
  // 		const projects = await response.json();
  // 		console.log(projects);
  // 		const reversedProjects = projects.reverse();
  // 		setProjects(reversedProjects);
  // 	} catch (error) {
  // 		setError(error.message);
  // 	}
  // };

  // useEffect(() => {
  // 	fetchProjects();
  // }, []);

  return (
    <div className='projects'>
      <h1 className='projects-headline'>03. Some Things I've Built</h1>
      {/* {error && error} */}
      <section className='projects-grid'>
        {[...projects].reverse().map((project) => {
          console.log(project);
          return <ProjectCard key={project.id} project={project} />;
        })}
      </section>
    </div>
  );
};

export default Work;
