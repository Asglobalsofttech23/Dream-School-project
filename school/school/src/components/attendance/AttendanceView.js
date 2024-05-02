import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../attendance/AttendanceView.css';
import schlogo from '../attendance/schlogo.png';
import { Link } from 'react-router-dom'; 

function AttendanceView() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('');
  const [section, setSection] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/attendance/');
      setAttendanceData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
      setLoading(false);
    }
  };
  const clearForm = () => {
    setName('');
    setAttendance('');
    setSection('');
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div>
      <img src={schlogo}/>
      <h1 className='atthead'>Attendance Details</h1>
      <AttendanceForm
        name={name}
        attendance={attendance}
        section={section}
        setName={setName}
        setAttendance={setAttendance}
        setSection={setSection}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className='attenviewtable'>
          <thead>
            <tr>
              <th className='th1'>Name</th>
              <th className='th1'>Attendance</th>
              <th className='th1'>Section</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((item) => (
              <tr key={item.id}>
                <td className='td1'>{item.name}</td>
                <td className='td1'>{item.attendance}</td>
                <td className='td1'>{item.section}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="adminattenviewbackdiv">
      <button className='adminattenviewback'><Link to="/">Back </Link></button>
      </div>
    </div>
  );
}

function AttendanceForm({ name, attendance, section,  setName, setAttendance, setSection,  onSubmit, isEditing }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
  <></>
  );
}

export default AttendanceView;
