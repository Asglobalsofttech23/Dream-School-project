import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Examinations/Examination.css';
import schlogo from '../Examinations/schlogo.png';
import { Link } from 'react-router-dom'; 

function Examinations() {
  const [examinations, setExaminations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [selectedClass, setSelectedClass] = useState(''); // State for selected class
  const [timing, setTiming] = useState(''); // State for exam timing
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

  const addExamination = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/exam/', { subject, date, class: selectedClass, timing }); // Send selectedClass and timing to the backend
      setExaminations([...examinations, response.data]);
      clearForm();
    } catch (error) {
      console.error('Error adding examination:', error);
    }
  };

  const updateExamination = async (id, updatedData) => {
    try {
      await axios.put(`http://127.0.0.1:8000/exam/${id}`, updatedData);
      const updatedExaminationData = examinations.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      );
      setExaminations(updatedExaminationData);
      clearForm();
    } catch (error) {
      console.error('Error updating examination:', error);
    }
  };

  const deleteExamination = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/exam/${id}`);
      const updatedExaminationData = examinations.filter((item) => item.id !== id);
      setExaminations(updatedExaminationData);
    } catch (error) {
      console.error('Error deleting examination:', error);
    }
  };

  const handleEditClick = (id, item) => {
    setIsEditing(true);
    setEditId(id);
    setSubject(item.subject);
    setDate(item.date);
    setSelectedClass(item.class); // Set selectedClass when editing
    setTiming(item.timing); // Set timing when editing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateExamination(editId, { subject, date, class: selectedClass, timing }); // Send selectedClass and timing to updateExamination
    } else {
      addExamination();
    }
  };

  const clearForm = () => {
    setSubject('');
    setDate('');
    setSelectedClass(''); // Clear selectedClass
    setTiming(''); // Clear timing
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className='examdiv'>
      <img src={schlogo} alt=''/>
      <h1 className='examhead'>Examinations</h1>
      <ExaminationForm
        subject={subject}
        date={date}
        selectedClass={selectedClass} // Pass selectedClass to ExaminationForm
        timing={timing} // Pass timing to ExaminationForm
        setSubject={setSubject}
        setDate={setDate}
        setSelectedClass={setSelectedClass} // Pass setSelectedClass to ExaminationForm
        setTiming={setTiming} // Pass setTiming to ExaminationForm
        onSubmit={handleSubmit}
        isEditing={isEditing}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className='examtable'>
          <thead>
            <tr>
              <th className='examth1'>Subject</th>
              <th className='examth1'>Date</th>
              {[...Array(10).keys()].map((num) => (
                <th key={num + 1} className='examth1'>Class {num + 1} Timing</th>
              ))}
              <th className='examth1'>Actions</th> {/* Add the Actions column here */}
            </tr>
          </thead>
          <tbody>
            {examinations.map((item) => (
              <tr key={item.id}>
                <td className='examtd1'>{item.subject}</td>
                <td className='examtd1'>{item.date}</td>
                {[...Array(10).keys()].map((num) => (
                  <td key={num + 1} className='examtd1'>{item.class === String(num + 1) ? item.timing : '-'}</td>
                ))}
                <td className='examtd1'>
                  <button className='exambtn1' onClick={() => deleteExamination(item.id)}>Delete</button>
                  <button className='exambtn2' onClick={() => handleEditClick(item.id, item)}>
                    {isEditing && editId === item.id ? 'Update' : 'Edit'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="adminxambackdiv">
        <button className='adminxamback'><Link to="/stafflogin">Back </Link></button>
      </div>
    </div>
  );
}

function ExaminationForm({ subject, date, selectedClass, timing, setSubject, setDate, setSelectedClass, setTiming, onSubmit, isEditing }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className="xamform" onSubmit={handleSubmit}>
      <input className='xaminput' type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
      <input className='xaminput' type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <select className='xaminput' value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
        {[...Array(10).keys()].map(num => (
          <option key={num + 1} value={String(num + 1)}>Class {num + 1}</option>
        ))}
      </select>
      <input className='xaminput' type="text" value={timing} onChange={(e) => setTiming(e.target.value)} placeholder="Timing" />
      <button className='exambtn' type="submit">{isEditing ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default Examinations;
