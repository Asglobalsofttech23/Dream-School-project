import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/FeeManagement.css';
import schlogo from '../components/schlogo.png';
import { Link } from 'react-router-dom'; 

function FeeManagement() {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [studentName, setStudentName] = useState('');
  const [className, setClassName] = useState('');
  const [date, setDate] = useState('');
  const [firstTermFee, setFirstTermFee] = useState('');
  const [secondTermFee, setSecondTermFee] = useState('');
  const [thirdTermFee, setThirdTermFee] = useState('');
  const [busFee, setBusFee] = useState('');
  const [pendingFee, setPendingFee] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/fees/');
      setFees(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching fee data:', error);
      setLoading(false);
    }
  };

  const addFee = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/fees/', {
        studentName,
        className,
        date,
        firstTermFee,
        secondTermFee,
        thirdTermFee,
        busFee,
        pendingFee
      });
      setFees([...fees, response.data]);
      clearForm();
    } catch (error) {
      console.error('Error adding fee:', error);
    }
  };

  const updateFee = async (id, updatedData) => {
    try {
      await axios.put(`http://127.0.0.1:8000/fees/${id}`, updatedData);
      const updatedFeeData = fees.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      );
      setFees(updatedFeeData);
      clearForm();
    } catch (error) {
      console.error('Error updating fee:', error);
    }
  };

  const deleteFee = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/fees/${id}`);
      const updatedFeeData = fees.filter((item) => item.id !== id);
      setFees(updatedFeeData);
    } catch (error) {
      console.error('Error deleting fee:', error);
    }
  };

  const handleEditClick = (id, item) => {
    setIsEditing(true);
    setEditId(id);
    setStudentName(item.studentName);
    setClassName(item.className);
    setDate(item.date);
    setFirstTermFee(item.firstTermFee);
    setSecondTermFee(item.secondTermFee);
    setThirdTermFee(item.thirdTermFee);
    setBusFee(item.busFee);
    setPendingFee(item.pendingFee);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateFee(editId, { studentName, className, date, firstTermFee, secondTermFee, thirdTermFee, busFee, pendingFee });
    } else {
      addFee();
    }
  };

  const clearForm = () => {
    setStudentName('');
    setClassName('');
    setDate('');
    setFirstTermFee('');
    setSecondTermFee('');
    setThirdTermFee('');
    setBusFee('');
    setPendingFee('');
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className='feediv'>
      <img src={schlogo} alt="School Logo"/>
      <h1>Fee Management</h1>
      <FeeForm
        studentName={studentName}
        className={className}
        date={date}
        firstTermFee={firstTermFee}
        secondTermFee={secondTermFee}
        thirdTermFee={thirdTermFee}
        busFee={busFee}
        pendingFee={pendingFee}
        setStudentName={setStudentName}
        setClassName={setClassName}
        setDate={setDate}
        setFirstTermFee={setFirstTermFee}
        setSecondTermFee={setSecondTermFee}
        setThirdTermFee={setThirdTermFee}
        setBusFee={setBusFee}
        setPendingFee={setPendingFee}
        onSubmit={handleSubmit}
        isEditing={isEditing}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className='feemanagetable'>
          <thead>
            <tr>
              <th className='feemanageth'>Student Name</th>
              <th className='feemanageth'>Class</th>
              <th className='feemanageth'>Date</th>
              <th className='feemanageth'>First Term Fee</th>
              <th className='feemanageth'>Second Term Fee</th>
              <th className='feemanageth'>Third Term Fee</th>
              <th className='feemanageth'>Bus Fee</th>
              <th className='feemanageth'>Pending Fee</th>
              <th className='feemanageth'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((item) => (
              <tr key={item.id}>
                <td className='feemanagetd'>{item.studentName}</td>
                <td className='feemanagetd'>{item.className}</td>
                <td className='feemanagetd'>{item.date}</td>
                <td className='feemanagetd'>{item.firstTermFee}</td>
                <td className='feemanagetd'>{item.secondTermFee}</td>
                <td className='feemanagetd'>{item.thirdTermFee}</td>
                <td className='feemanagetd'>{item.busFee}</td>
                <td className='feemanagetd'>{item.pendingFee}</td>
                <td className='feemanagebtntd'>
                  <button className="feemanagebtntd1" onClick={() => deleteFee(item.id)}>Delete</button>
                  <button className="feemanagebtntd2" onClick={() => handleEditClick(item.id, item)}>
                    {isEditing && editId === item.id ? 'Update' : 'Edit'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="adminfeebackdiv">
        <button className='adminfeeback'><Link to="/adminloginform">Back </Link></button>
      </div>
    </div>
  );
}

function FeeForm({ studentName, className, date, firstTermFee, secondTermFee, thirdTermFee, busFee, pendingFee, setStudentName, setClassName, setDate, setFirstTermFee, setSecondTermFee, setThirdTermFee, setBusFee, setPendingFee, onSubmit, isEditing }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  
  return (
    <form className="feeform" onSubmit={handleSubmit}>
      <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Student Name" />
      <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} placeholder="Class" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="number" value={firstTermFee} onChange={(e) => setFirstTermFee(e.target.value)} placeholder="First Term Fee" />
      <input type="number" value={secondTermFee} onChange={(e) => setSecondTermFee(e.target.value)} placeholder="Second Term Fee" />
      <input type="number" value={thirdTermFee} onChange={(e) => setThirdTermFee(e.target.value)} placeholder="Third Term Fee" />
      <input type="number" value={busFee} onChange={(e) => setBusFee(e.target.value)} placeholder="Bus Fee" />
      <input type="number" value={pendingFee} onChange={(e) => setPendingFee(e.target.value)} placeholder="Pending Fee" />
      <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default FeeManagement;
