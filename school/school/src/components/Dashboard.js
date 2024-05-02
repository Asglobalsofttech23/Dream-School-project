// Dashboard.js
import React, { useState } from 'react';
import '../styles/Dashboard.css'; 
import Sidebar from './Sidebar'; // Update import path for Sidebar
import Barchart from './Barchart'; // Update import path for Barchart
import Navbar from './Navbar'; // Update import path for Navbar
import Feechart from './FeeManagement';
import EnquiryOverview from './EnquiryOverview';

function Dashboard() {
  const [showData, setShowData] = useState(null);

  const UpcomingExamsData = [
    {
      id: 1,
      subject: 'Mathematics',
      date: '2022-04-15',
      time: '09:00 AM',
      location: 'Room 101',
    },
    {
      id: 2,
      subject: 'Science',
      date: '2022-04-18',
      time: '10:30 AM',
      location: 'Room 102',
    },
    
  ];

  const studentsData = [
    { id: 1, name: 'John Doe', grade: 'A' },
    { id: 2, name: 'Jane Smith', grade: 'B' },
  
  ];

  const teachersData = [
    { id: 1, name: 'Mr. Johnson', subject: 'Mathematics' },
    { id: 2, name: 'Ms. Smith', subject: 'Science' },
  
  ];

  const coursesData = [
    { id: 1, name: 'Mathematics', teacher: 'Mr. Johnson' },
    { id: 2, name: 'Science', teacher: 'Ms. Smith' },
  
  ];

  const attendanceData = [
    { id: 1, date: '2024-03-25', present: 20, absent: 5 },
    { id: 2, date: '2024-03-26', present: 18, absent: 7 },
    // Add more attendance data as needed
  ];

  const handleViewData = (dataType) => {
    setShowData(dataType);
  };

  return (
    <>
      <Navbar/>
      <Sidebar/>
      
      <div className='full'>
        <div>
          
        </div>
        <div className="dashboard-container">
          <div className='background-image'>
            <div className='content-container'>
              <div className="dashboard">
                <h2>View Data</h2>
                <div className="dashboard-card">
                  <button className='b1' onClick={() => handleViewData('students')}>View Students</button>
                  <button className='b2' onClick={() => handleViewData('teachers')}>View Teachers</button>
                  <button className='b3' onClick={() => handleViewData('courses')}>View Courses</button>
                  <button className='b4' onClick={() => handleViewData('attendance')}>View Attendance</button>
                  <button className='b5' onClick={() => handleViewData('UpcomingExams')}>Upcoming Exams</button>
                </div>
                <div className="dashboard-card2">
                  {showData === 'students' && (
                    <div>
                      <h2>Students</h2>
                      <ul>
                        {studentsData.map(student => (
                          <li key={student.id}>{student.name} - Grade: {student.grade}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {showData === 'teachers' && (
                    <div>
                      <h2>Teachers</h2>
                      <ul>
                        {teachersData.map(teacher => (
                          <li key={teacher.id}>{teacher.name} - Subject: {teacher.subject}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {showData === 'courses' && (
                    <div>
                      <h2>Courses</h2>
                      <ul>
                        {coursesData.map(course => (
                          <li key={course.id}>{course.name} - Teacher: {course.teacher}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {showData === 'attendance' && (
                    <div>
                      <h2>Attendance</h2>
                      <ul>
                        {attendanceData.map(attendance => (
                          <li key={attendance.id}>
                            Date: {attendance.date}, Present: {attendance.present}- Absent: {attendance.absent}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {showData === 'UpcomingExams' && (
                    <div>
                      <h2>Exams</h2>
                      <ul>
                        {UpcomingExamsData.map(UpcomingExams => (
                          <li key={UpcomingExams.id}>
                            Subject:{UpcomingExams.subject},Date: {UpcomingExams.date}- Time: {UpcomingExams.time}, Location: {UpcomingExams.location}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Barchart/>
    </>
  );
}

export default Dashboard;
