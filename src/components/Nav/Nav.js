import { NavLink } from "react-router-dom";
import './Nav.scss'

const Nav = () => {
    return (
        <nav>
            <NavLink to='/' className='navlink'>Home</NavLink>
            <NavLink to='/About' className='navlink'>About</NavLink>
            <NavLink to='/Experience' className='navlink'>Experience</NavLink>
            <NavLink to='/Work' className='navlink'>Work</NavLink>
            <NavLink to='/Contact' className='navlink'>Contact</NavLink>
            <NavLink to='/Resume' className='navlink'>Resume</NavLink>
        </nav>
    )
}


export default Nav;