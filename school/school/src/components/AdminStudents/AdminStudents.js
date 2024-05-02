import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminStudents.css';
import schlogo from '../AdminStudents/schlogo.png';
import { Link } from 'react-router-dom'; 


const initialFormState = { id: null, name: '', age: '', grade: '' };

function AdminStudents() {
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

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/members/`+id);
      fetchStudents(); // Fetch updated students data
    } catch (error) {
      setError('Error deleting student');
    }
  };

  const editStudent = id => {
    const studentToEdit = students.find(student => student.id === id);
    setFormData(studentToEdit);
    setIsEditing(true);
    setEditId(id);
  };

  return (
    <div className="studdiv">
              <img src={schlogo} alt=''/>
      <h1 className='studhead'>School Management System</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="form-container">
        <form  className="staffstuform" onSubmit={handleSubmit}>
          <input
          className='staffstuin'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Student Name"
          />
          <input
          className='staffstuin'
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Age"
          />
          <input
          className='staffstuin'
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleInputChange}
            placeholder="Grade"
          />
          <button className="stubtn0" type="submit">
            {isEditing ? 'Update Student' : 'Add Student'}
          </button>
        </form>
      </div>
      <div className="students-list">
        <table className='staffstutable'>
          <thead>
            <tr>
              <th className='studth1'>Student Name</th>
              <th className='studth1'>Age</th>
              <th className='studth1'>Grade</th>
              <th className='studth1'>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td className='studtd1'>{student.name}</td>
                <td className='studtd1'>{student.age}</td>
                <td className='studtd1'>{student.grade}</td>
                <td className='studtd1'>
                  <button className="studbtn1" onClick={() => editStudent(student.id)}>
                    Edit
                  </button>
                  <button className="studbtn2" onClick={() => deleteStudent(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      <div className="staffstubackdiv">
      <button className='staffstuback'><Link to="/stafflogin">Back </Link></button>
      </div>
      
    </div>
  );
}

export default AdminStudents;
