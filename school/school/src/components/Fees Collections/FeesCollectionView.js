import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Fees Collections/FeesCollectionView.css';
import schlogo from '../Examinations/schlogo.png';
import { Link } from 'react-router-dom'; 

function FeeCollectionView() {
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [studentName, setStudentName] = useState('');
  const [className, setClassName] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
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

  const clearForm = () => {
    setStudentName('');
    setClassName('');
    setDate('');
    setAmount('');
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div>
      <img src={schlogo}/>
      <h1 className='feehead'>Fee Management</h1>
      <FeeForm
        studentName={studentName}
        className={className}
        date={date}
        amount={amount}
        setStudentName={setStudentName}
        setClassName={setClassName}
        setDate={setDate}
        setAmount={setAmount}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className='feetable '>
          <thead>
            <tr className='tr1'>
              <th className='th1'>Student Name</th>
              <th className='th1'>Class</th>
              <th className='th1'>Date</th>
              <th className='th1'>Amount</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((item) => (
              <tr key={item.id}>
                <td className='td1'>{item.studentName}</td>
                <td className='td1'>{item.className}</td>
                <td className='td1'>{item.date}</td>
                <td className='td1'>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
          <div className="adminfeeviewbackdiv">
      <button className='adminfeeviewback'><Link to="/">Back </Link></button>
      </div>
    </div>
  );
}

function FeeForm({ studentName, className, date, amount, setStudentName, setClassName, setDate, setAmount, onSubmit, isEditing }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  
  return (
 <></>
  );
}

export default FeeCollectionView;
