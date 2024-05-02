
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AdminStudents from './components/AdminStudents/AdminStudents';
import AdminTeachers from './components/AdminTeachers/AdminTeachers';
import Subjects from './components/Subjects/Subjects';
import SubjectsView from './components/Subjects/SubjectsView';
import AdminLoginForm from './components/logins/AdminLoginForm';
import FeeManagement from './components/FeeManagement';
import Students from './components/students/Students';
import Teachers from './components/Teachers/Teachers';

import Examinations from './components/Examinations/Examnation';
import ExaminationView from './components/Examinations/ExaminationView';
import Attendance from './components/attendance/Attendance';
import StaffLogin from './components/logins/StaffLogin';
import AttendanceView from './components/attendance/AttendanceView';
import FeeCollectionView from './components/Fees Collections/FeesCollectionView';

const App = () => {
 
  return (
    <>
    
    <Router>
      <div>
        <Routes>
          <Route path="/adminstudents" element={<AdminStudents />} />
          <Route path="/std" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/adminteachers" element={<AdminTeachers />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/subjectsview" element={<SubjectsView />} />
          <Route path="/fees" element={<FeeManagement/>} />
          <Route path="/feecollectionview" element={<FeeCollectionView/>} />
          <Route path="/attendance" element={<Attendance/>} />
          <Route path="/attendanceview" element={<AttendanceView/>} />
          <Route path="/examination" element={<Examinations/>} />
          <Route path="/examinationView" element={<ExaminationView/>} />
          <Route path="/" element={<Dashboard />} />
          <Route path='/adminloginform' element={<AdminLoginForm/>}/>
          <Route path='/stafflogin' element={<StaffLogin/>}/>
        </Routes>
      </div>
    </Router>

    
    </>
  );
};

export default App;
