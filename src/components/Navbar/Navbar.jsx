import { NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assests/quiz.svg'
import favicon from '../../assests/favicon.ico'

const Navbar = () => {
    return (
      <nav className="my-navbar">
        <div className="my-navbar-div">
          <div className="align-items-center">
            <NavLink to="/"><img src={favicon} alt="" className='logo' /></NavLink>
            <NavLink className="quizplomatic" to="/">Quizplomatic</NavLink>
          </div>

          <div>
            <ul className="navbar-nav d-flex flex-row justify-content-around links">
                <li className="nav-item">
                    <NavLink className="link" to="/quiz">Quiz</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="link" to="/all">All</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="link" to="/new">New</NavLink>
                </li>  
                <li className="nav-item">
                    <NavLink className="link" to="/login">LogIn</NavLink>
                </li>  
                <li className="nav-item">
                    <NavLink className="link" to="/register">Register</NavLink>
                </li>  
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar