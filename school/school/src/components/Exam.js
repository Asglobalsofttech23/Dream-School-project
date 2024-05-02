import React from 'react';
import '../styles/Exam.css';

const Exam = ({ exam }) => {
  return (
    <div className="exam-card">
      <h2>{exam.subject}</h2>
      <p>Date: {exam.date}</p>
      <p>Time: {exam.time}</p>
      <p>Location: {exam.location}</p>
    </div>
  );
};

export default Exam;