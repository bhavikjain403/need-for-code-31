import './App.css';
import MainLogin from './components/Login/MainLogin';
import AdminLanding from './components/Landing/AdminLanding';
import StudentLanding from './components/Landing/StudentLanding';
import AdminLogin from './components/Login/AdminLogin';
import TeacherLanding from './components/Landing/TeacherLanding';
import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainLogin/>}/>
          <Route path='/admin' element={<AdminLanding/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
