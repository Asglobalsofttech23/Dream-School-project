import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Examinations/ExaminationView.css';
import schlogo from '../Examinations/schlogo.png';
import { Link } from 'react-router-dom'; 

function ExaminationView() {
  const [examinations, setExaminations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchExaminations();
  }, []);

  const fetchExaminations = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/exam/');
      setExaminations(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching examination data:', error);
      setLoading(false);
    }
  };


  const clearForm = () => {
    setSubject('');
    setDate('');
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div>
    <img src={schlogo}/>

      <h1 className='examhead'>Examinations</h1>
      <ExaminationForm
        subject={subject}
        date={date}
        setSubject={setSubject}
        setDate={setDate}

      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className='examviewtable'>
          <thead>
            <tr>
              <th className='th1'>Subject</th>
              <th className='th1'>Date</th>
            </tr>
          </thead>
          <tbody>
            {examinations.map((item) => (
              <tr key={item.id}>
                <td className='td1'>{item.subject}</td>
                <td className='td1'>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
       <div className="adminexambackdiv">
      <button className='adminexamback'><Link to="/">Back </Link></button>
      </div>
    </div>
  );
}

function ExaminationForm({ subject, date, setSubject, setDate, onSubmit, isEditing }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(e); // Pass the event object to the onSubmit function
    };

    return (
      <></>
      );
    }

export default ExaminationView;
