import { NavLink } from "react-router-dom";
import './Nav.scss'
import logo from '../../chez-gallo-icon.png'

const Nav = () => {
    return (
        <nav>
            <div>
              <img className="logo" src={logo} alt='chez gallo icon'></img>
            </div>
            <ol className='menu'>
							<li>
								<NavLink to='/' className='navlink'>Home</NavLink>
							</li>
							<li>
								<NavLink to='/About' className='navlink'>About</NavLink>
							</li>
							<li>
								<NavLink to='/Experience' className='navlink'>Experience</NavLink>
							</li>
							<li>
								<NavLink to='/Work' className='navlink'>Work</NavLink>
							</li>
							<li>
								<NavLink to='/Contact' className='navlink'>Contact</NavLink>
							</li>
							<li>
								<NavLink to='/Resume' className='navlink'>Resume</NavLink>
							</li>
            </ol>
        </nav>
    )
}


export default Nav;