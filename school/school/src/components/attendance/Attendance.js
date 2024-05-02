import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../attendance/Attendance.css';
import schlogo from '../attendance/schlogo.png';

import { Link } from 'react-router-dom'; 
function Attendance() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('');
  const [section, setSection] = useState('');
  const [date, setDate] = useState('');
  const [standard, setStandard] = useState('');
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

  const addAttendance = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/attendance/', { name, attendance, section, date, standard });
      setAttendanceData([...attendanceData, response.data]);
      clearForm();
    } catch (error) {
      console.error('Error adding attendance:', error);
    }
  };

  const updateAttendance = async (id, updatedData) => {
    try {
      await axios.put(`http://127.0.0.1:8000/attendance/${id}`, updatedData);
      const updatedAttendanceData = attendanceData.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      );
      setAttendanceData(updatedAttendanceData);
      clearForm();
    } catch (error) {
      console.error('Error updating attendance:', error);
    }
  };

  const deleteAttendance = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/attendance/${id}`);
      const updatedAttendanceData = attendanceData.filter((item) => item.id !== id);
      setAttendanceData(updatedAttendanceData);
    } catch (error) {
      console.error('Error deleting attendance:', error);
    }
  };

  const handleEditClick = (id, item) => {
    setIsEditing(true);
    setEditId(id);
    setName(item.name);
    setAttendance(item.attendance);
    setSection(item.section);
    setDate(item.date);
    setStandard(item.standard);
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (isEditing) {
      updateAttendance(editId, { name, attendance, section, date, standard });
    } else {
      addAttendance();
    }
  };
  

  const clearForm = () => {
    setName('');
    setAttendance('');
    setSection('');
    setDate('');
    setStandard('');
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className='attendiv'>
      <img src={schlogo} alt=''/>
      <h1 className='atten1head'>Attendance Details</h1>
      <AttendanceForm
        name={name}
        attendance={attendance}
        section={section}
        date={date}
        standard={standard}
        setName={setName}
        setAttendance={setAttendance}
        setSection={setSection}
        setDate={setDate}
        setStandard={setStandard}
        onSubmit={handleSubmit}
        isEditing={isEditing}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className='atten1table'>
          <thead>
            <tr>
              <th className='attenth1'>Name</th>
              <th className='attenth1'>Attendance</th>
              <th className='attenth1'>Section</th>
              <th className='attenth1'>Date</th>
              <th className='attenth1'>Standard</th>
              <th className='attenth1'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((item) => (
              <tr key={item.id}>
                <td className='attentd1'>{item.name}</td>
                <td className='attentd1'>{item.attendance}</td>
                <td className='attentd1'>{item.section}</td>
                <td className='attentd1'>{item.date}</td>
                <td className='attentd1'>{item.standard}</td>
                <td className='attentd1'>
                  <button className='attenbtn1' onClick={() => deleteAttendance(item.id)}>Delete</button>
                  <button className='attenbtn2' onClick={() => handleEditClick(item.id, item)}>
                    {isEditing && editId === item.id ? 'Update' : 'Edit'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="adminatten1backdiv">
      <button className='adminatten1back'><Link to="/stafflogin">Back </Link></button>
      </div>
    </div>
  );
}

function AttendanceForm({ name, attendance, section, date, standard, setName, setAttendance, setSection, setDate, setStandard, onSubmit, isEditing }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className='atten1form' onSubmit={handleSubmit}>
      <input className='atten1input' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input className='atten1input' type="text" value={attendance} onChange={(e) => setAttendance(e.target.value)} placeholder="Attendance" />
      <input className='atten1input' type="text" value={section} onChange={(e) => setSection(e.target.value)} placeholder="Section" />
      <input className='atten1input' type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />
      <input className='atten1input'   type="text" value={standard} onChange={(e) => setStandard(e.target.value)} placeholder="Standard" />
      <button  className='atten1btn' type="submit">{isEditing ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default Attendance;
