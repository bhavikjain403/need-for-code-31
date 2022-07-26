import './App.css';
import MainLogin from './components/Login/MainLogin';
import AdminLanding from './components/Landing/AdminLanding';
import StudentLanding from './components/Landing/StudentLanding';
import TeacherLanding from './components/Landing/TeacherLanding';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MainLogin/>
      {/* <BrowserRouter>
      <Routes>
          <Route exact path='/' component={()=> <AdminLogin/>}/>
      </Routes>
      </BrowserRouter> */}
      <AdminLanding/>
      <StudentLanding/>
      <TeacherLanding/>
    </div>
  );
}

export default App;
