

// import React, { useState } from 'react';
// import '../logins/styles/StaffLogin.css';

// const StaffLogin = ({ onSuccess }) => { // Ensure the prop name is "onSuccess"
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');


  
//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === 'admin123') {
//       onSuccess(); // Call the onSuccess function passed from the parent component
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Admin Login</h2>
//       {error && <p>{error}</p>}
//       <form className="login-form" onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input type="text" value={username} onChange={handleUsernameChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default StaffLogin;


// StaffLogin.js

import React, { useState } from 'react';
import AdminStudents from '../AdminStudents/AdminStudents';
import '../logins/StaffLogin.css'
import { Link } from 'react-router-dom'; 

const StaffLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if username and password are correct
    if (username === 'staff' && password === 'staff123') {
      // Update the isLoggedIn state to true
      setIsLoggedIn(true);
      // Display success alert message
      alert('Welcome Staff');
    } else {
      // Display error alert message
      setError('Invalid username or password');
    }
  };

  if (isLoggedIn) {
    return (
      <div className='staff1'>
        <h2 className='staffhead'>Welcome Staff!</h2>
        <div className='staff1_1'>
          <button className='btnstaff1'><Link to="/subjects">Subjects </Link></button>
          <button className='btnstaff2'><Link to="/examination">Examinations</Link></button>
          <button className='btnstaff3'><Link to="/attendance">Attendance</Link></button>
          <button className='btnstaff4'><Link to="/adminstudents">Students</Link></button>
        </div>
      </div>
    );
  }

  return (
    <div className='login-container'>
      <h2>Staff Login</h2>
      {error && <p>{error}</p>}
      <form className='form1' onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input className='in1' type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input className='in1' type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className='btn1' type="submit">Login</button>
      </form>
    </div>
  );
};

export default StaffLogin;