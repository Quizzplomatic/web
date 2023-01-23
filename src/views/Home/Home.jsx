import { Link } from 'react-router-dom'
import './Home.css'
import friso from '../../assests/books.jpeg'
import learn from '../../assests/undraw_education_f8ru.svg'
import book from '../../assests/undraw_online_learning_re_qw08.svg'


const Home = () => {
    return (
        <>
        <div className="Home">
            <div className="hero">
                <img src={learn} alt="" className="friso"/>

                <div>
                    <h1 className="home-h1">Welcome to Quizplomatic!</h1>
                    <h4 className="home-h4"><i>-- An app for aspiring diplomats --</i></h4>
                </div>
            </div>

            <div className="hero-2">
                <p className="home-p"><i>+2000 questions!</i></p>

                <div>
                    <h2 className="home-h2">Put your diplomacy skills and knowledge to the test!</h2>
                    <h4 className="home-h4">This web will give you a random question from our database for you to check your knowledge in all-things-diplomacy. You can also filter by category, search for a specific term, or check all of the questions and their answers.</h4>
                    <Link className="lets-start" to="/quiz">Let's start!</Link>
                </div>
            </div>

        </div>
        </>
    )
}

export default Home