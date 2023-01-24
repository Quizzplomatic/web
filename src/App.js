import './App.css';

import { Route, Routes } from 'react-router';

import Navbar from './components/Navbar/Navbar';
import AllQuestions from './views/AllQuestions/AllQuestions';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import NewQuestion from './views/NewQuestion/NewQuestion';
import Quiz from './views/Quiz/Quiz';
import Register from './views/Register/Register';
import UnprotectedRoute from './guard/UnProtectedRoute';
import { useAuthContext } from './contexts/AuthContext/AuthContext';
import ProtectedRoute from './guard/ProtectedRoute';
import Toast from './components/Toast/Toast';

function App() {
  const { isAuthenticationFetched, toast } = useAuthContext()

  return (
    <div className="App">
      <Navbar></Navbar>
      
      {!isAuthenticationFetched ? 
        <></>
        :
        <div className='main'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/quiz' element={<Quiz />} />

              <Route element={<UnprotectedRoute />}>
                <Route path='/login' element={<Login/>} />
              </Route>

              <Route element={<ProtectedRoute />}>
                <Route path='/all' element={<AllQuestions />} />
                <Route path='/new' element={<NewQuestion />} />
                <Route path="/register" element={<Register />}/>
              </Route>

            </Routes>
        </div>
      }
      {toast && <Toast type={toast.type}>{toast.message}</Toast>}
    </div>
  );
}

export default App;
