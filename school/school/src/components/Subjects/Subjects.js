import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Subjects/Subjects.css';
import schlogo from '../Subjects/schlogo.png'
import { Link } from 'react-router-dom'; 


function Subject() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subjectName, setSubjectName] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/subject/');
      setSubjects(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching subjects:', error);
      setLoading(false);
    }
  };

  const addSubject = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/subject/', { subjectname: subjectName });
      setSubjects([...subjects, response.data]);
      setSubjectName('');
    } catch (error) {
      console.error('Error adding subject:', error);
    }
  };

  const deleteSubject = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/subject/${id}/`);
      const updatedSubjects = subjects.filter((subject) => subject.id !== id);
      setSubjects(updatedSubjects);
    } catch (error) {
      console.error('Error deleting subject:', error);
    }
  };

  const updateSubject = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/subject/${selectedSubject.id}/`, { subjectname: subjectName });
      const updatedSubjects = subjects.map((subject) => {
        if (subject.id === selectedSubject.id) {
          return { ...subject, subjectname: subjectName };
        }
        return subject;
      });
      setSubjects(updatedSubjects);
      setSubjectName('');
      setSelectedSubject(null);
    } catch (error) {
      console.error('Error updating subject:', error);
    }
  };

  const handleEdit = (subject) => {
    setSubjectName(subject.subjectname);
    setSelectedSubject(subject);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSubject) {
      updateSubject();
    } else {
      addSubject();
    }
  };

  return (
    <div className='subdiv'>
      <img src={schlogo} alt=''/>
      <h1 className='subhead'>Subjects</h1>
      <form onSubmit={handleSubmit} className='subjectform'>
        <input
        className='subjetinput'
          type="text"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          placeholder="Enter Subject Name"
        />
        <button className='subbtn0' type="submit">{selectedSubject ? 'Update Subject' : 'Add Subject'}</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className='subtable'>
          <thead className='thead1'>
            <tr className='tr1'>
              <th className='th1'>Subject Name</th>
              <th className='th1'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.id}>
                <td className='td1'>{subject.subjectname}</td>
                <td className='td1'>
                  <button className="subbtn1" onClick={() => deleteSubject(subject.id)}>Delete</button>
                  <button className="subbtn2" onClick={() => handleEdit(subject)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
       <div className="adminsub1backdiv">
      <button className='adminsub1back'><Link to="/stafflogin">Back </Link></button>
      </div>
    </div>
  );
}

export default Subject;
