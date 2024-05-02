import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className='side'>
        <li>Dashboard</li>
        <li><Link to="/std">Students</Link></li> 
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/subjectsview">Subjects</Link></li>
        <li ><Link to="/examinationview">Examinations</Link></li>
        <li><Link to="/feecollectionview">Fees Details</Link></li>
        <li><Link to="/stafflogin">Staff Login</Link></li>
        <li><Link to="/attendanceview">Attenance </Link></li>
        <li>Super Admin</li>
      </ul>
    </div>
  );
};

export default Sidebar;
