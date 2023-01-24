import { NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assests/quiz.svg'
import favicon from '../../assests/favicon.ico'
import { useAuthContext } from '../../contexts/AuthContext/AuthContext';
import { logout } from '../../store/accessTokenStore';

const Navbar = () => {
    const { user } = useAuthContext();

    const doLogout = () => {
      logout();
      createToast("See you next time!", "success");
    }

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
              {!user ?
                <>
                  <li className="nav-item">
                      <NavLink className="link" to="/login">Log in</NavLink>
                  </li>  
                  {/* <li className="nav-item">
                      <NavLink className="link" to="/register">Register</NavLink>
                  </li>  */}
                </>
                  : 
                  <li className="nav-item">
                      <p className="link" onClick={doLogout}>Log out</p>
                  </li> 
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar