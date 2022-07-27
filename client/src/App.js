import './App.css';
import MainLogin from './components/Login/MainLogin';
import MainPage from './components/MainPage/MainPage';
import AdminLanding from './components/Landing/AdminLanding';
import TeacherLanding from './components/Landing/TeacherLanding';
import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom';
import Publish from './components/Notification/Publish';
import StudentData from './components/Student/StudentData';
import FacultyData from './components/Faculty/FacultyData';
import TeacherRegister from './components/Landing/TeacherRegister';
import StudentRegister from './components/Landing/StudentRegister';
import { useContext } from 'react';
import CompleteCalendar from './components/Calendar/CompleteCalendar';
import CalendarState from './contexts/calendar/calendarState';
import Home from './components/StudentDashboard/Home';
import calendar from './contexts/calendar/calendarContext';
import Stats from './components/Stats/Stats';
import Grievance from './components/Grievance/Grievance';

function App() {

  return (

    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route exact path='/admin' element={<AdminLanding/>}/>
          <Route exact path='/addfaculty' element={<TeacherRegister/>}/>
          <Route exact path='/staff' element={<FacultyData/>}/>
          <Route exact path='/student' element={<StudentData/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/grievance' element={<Grievance/>}/>
          <Route exact path='/stats' element={<Stats/>}/>
          <Route exact path='/teacher' element={<TeacherLanding/>}/>
          <Route exact path='/admin/publish' element={<Publish/>}/>
          <Route exact path='/calendar' element={<CompleteCalendar/>}/>
          <Route exact path='/studentreg' element={<StudentRegister/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
