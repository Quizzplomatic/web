import './App.css';

import { Route, Routes } from 'react-router';

import Navbar from './components/Navbar/Navbar';
import AllQuestions from './views/AllQuestions/AllQuestions';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import NewQuestion from './views/NewQuestion/NewQuestion';
import Quiz from './views/Quiz/Quiz';
import Register from './views/Register/Register';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      
      <div className='main'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/all' element={<AllQuestions />} />
            <Route path='/new' element={<NewQuestion />} />
            <Route path="/register" element={<Register />}/>
            <Route path='/login' element={<Login/>} />
          </Routes>
        </div>

    </div>
  );
}

export default App;
