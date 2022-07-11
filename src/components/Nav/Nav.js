import { NavLink, Link } from "react-router-dom";
import "./Nav.scss";
import logo from "../../chez-gallo-icon.png";
import chezResume from './resume.pdf'

const Nav = () => {
	return (
		<nav>
			<div>
				<Link to="/">
					<img className="logo" src={logo} alt="chez gallo icon"></img>
				</Link>
			</div>
			<ol className="menu">
				<li>
					<NavLink to="/" className="navlink">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/About" className="navlink">
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/Experience" className="navlink">
						Experience
					</NavLink>
				</li>
				<li>
					<NavLink to="/Work" className="navlink">
						Work
					</NavLink>
				</li>
				<li>
					<NavLink to="/Contact" className="navlink">
						Contact
					</NavLink>
				</li>
				<li>
          <a class="navlink resume-button" href={chezResume} target="_blank" rel="noopener noreferrer">Resume</a>
				</li>
			</ol>
		</nav>
	);
};

export default Nav;
