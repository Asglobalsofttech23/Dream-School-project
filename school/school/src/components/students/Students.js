import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../students/Students.css';
import schlogo from '../students/schlogo.png';
import { Link } from 'react-router-dom'; 
const initialFormState = { id: null, name: '', age: '', grade: '' };

function Students() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/members/');
      setStudents(response.data);
    } catch (error) {
      setError('Error fetching students data');
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (!formData.name || !formData.age || !formData.grade) return;
    try {
      if (isEditing) {
        await axios.put(`http://127.0.0.1:8000/members/${editId}`, formData);
        fetchStudents(); // Fetch updated students data
      } else {
        await axios.post('http://127.0.0.1:8000/members/', formData);
        fetchStudents(); // Fetch updated students data
      }
      setFormData(initialFormState);
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      setError('Error saving student data');
    }
  };


  return (
    <div className="Students">
      <img src={schlogo}/>
      <h1 className='studhead'>School Management System</h1>
      {error && <p className="error-message">{error}</p>}
     
      <div className="students-list1">
        <table className='table1'>
          <thead className='thead1'>
            <tr className='tr1'>
              <th className='th1'>Student Name</th>
              <th className='th1'>Age</th>
              <th className='th1'>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td className='td1'>{student.name}</td>
                <td className='td1'>{student.age}</td>
                <td className='td1'>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="adminstubackdiv">
      <button className='adminstuback'><Link to="/adminloginform">Back </Link></button>
      </div>
    </div>
  );
}

export default Students;
