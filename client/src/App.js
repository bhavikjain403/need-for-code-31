import './App.css';
import MainLogin from './components/Login/MainLogin';
import AdminLanding from './components/Landing/AdminLanding';
import Calendar from './components/Calendar/Calendar'
import StudentLanding from './components/Landing/StudentLanding';
import AdminLogin from './components/Login/AdminLogin';
import TeacherLanding from './components/Landing/TeacherLanding';
import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom';
import GeeksforGeeks from './components/Landing/Complaint';
import Publish from './components/Notification.js/Publish';
import { useContext } from 'react';
import calendar from './contexts/calendar/calendarContext';
import CalendarState from './contexts/calendar/calendarState';

function App() {
  const cal=useContext(calendar)

  return (
    <div className="App">
      <CalendarState>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainLogin/>}/>
          <Route exact path='/admin' element={<AdminLanding/>}/>
          <Route exact path='/teacher' element={<TeacherLanding/>}/>
          <Route exact path='/admin/complaints' element={<GeeksforGeeks/>}/>
          <Route exact path='/admin/publish' element={<Publish/>}/>
          <Route exact path='/teacher/calendar' element={<Calendar/>}/>
      </Routes>
      </BrowserRouter>
      </CalendarState>
    </div>
  );
}

export default App;
