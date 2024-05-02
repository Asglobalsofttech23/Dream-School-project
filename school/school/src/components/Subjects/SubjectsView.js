import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SubjectsView.css'; // Import the CSS file with styles
import schlogo from '../students/schlogo.png';
import { Link } from 'react-router-dom'; 
function SubjectsView() {
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

  return (
    <div className="subjects-container">
      <img src={schlogo}/>
      <h1 className='subjecthead'>Subjects</h1>
      <table className="subject-table">
        <thead>
          <tr>  
            <th className='th1'>Subject Name</th>
          </tr>
        </thead>
        <tbody> 
          {loading ? (
            <tr>
              <td colSpan="1">Loading...</td>
            </tr>
          ) : (
            subjects.map((subject) => (
              <tr key={subject.id}>
                <td className='td1'>{subject.subjectname}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="adminsubbackdiv">
      <button className='adminsubback'><Link to="/">Back </Link></button>
      </div>
    </div>
  );
}

export default SubjectsView;
