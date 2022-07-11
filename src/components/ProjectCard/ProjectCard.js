// import { NavLink, Link } from "react-router-dom";
import "./ProjectCard.scss";
import { titleCase } from "title-case";
import IconGitHub from "../Icons/IconGitHub";

const ProjectCard = ({ project }) => {
	let index = 1;
	console.log(project);

	const ghRendering = !project.external_link ? 
  (<p className="gh-title-only">GitHub: </p>) : 
  (<p className="gh-title">GitHub: </p>);

	// const deployedLink = project.external_link !== null ? <Link to={project.external_link}></Link>
	return (
		<section className="project-card">
			<div className="project-info-left">
				<h1 className="project-title">{project.title}</h1>
				{project.img !== null && (
					<img
						className="project-imgs"
						src={project.img}
						alt="selected project"
					></img>
				)}
			</div>
			<div className="project-info-right">
				<h2 className="description-title">Project Description: </h2>
				<p className="project-description">{project.description}</p>
				<h3 className="technologies-title">Technologies Used: </h3>
				<ul className="tech-list">
					{project.tech_stack.map((technology) => {
						return (
							<li className="tech-name" key={index++}>
								{technology}
							</li>
						);
					})}
				</ul>
				<h4 className="project-type">Project Type: </h4>
				<p className="type"> * {titleCase(project.project_type)}</p>
				<h4 className="project-links">Project Links: </h4>
				<div className="external-links">
					{project.external_link !== null && (
						<a href={project.external_link} className="deployed">
							Check out the deployed App
						</a>
					)}
					{ghRendering}
					<a href={project.github_repository}>
						<IconGitHub />
					</a>
				</div>
			</div>
		</section>
	);
};

export default ProjectCard;
