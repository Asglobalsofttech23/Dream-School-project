

// import React, { useState } from 'react';
// import '../logins/styles/AdminLoginForm.css';

// const AdminLoginForm = ({ onSuccess }) => { // Ensure the prop name is "onSuccess"
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

// export default AdminLoginForm;


// AdminLoginForm.js

import React, { useState } from 'react';
import AdminTeachers from '../AdminTeachers/AdminTeachers';
import AdminStudents from '../AdminStudents/AdminStudents';
import '../logins/AdminLoginForm.css'
import { Link } from 'react-router-dom'; 
import schlogo from '../AdminTeachers/schlogo.png';

const AdminLoginForm = () => {
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
    if (username === 'admin' && password === 'admin123') {
      // Update the isLoggedIn state to true
      setIsLoggedIn(true);
      // Display success alert message
      alert('Welcome Admin');
    } else {
      // Display error alert message
      setError('Invalid username or password');
    }
  };

  if (isLoggedIn) {
    return (
      <div className='admindiv0'>
        <img src={schlogo}/>
      <div className='admindiv'>
        <h2>Welcome Admin!</h2>
        <div className='admin'>
          <button className='adminbtn'><Link to="/adminteachers">Teachers </Link></button>
          <button className='adminbtn'><Link to="/fees">Students</Link></button>
        </div>
      </div>
      <button className='adminback'><Link to="/">Back </Link></button>
      </div>
    );
  }

  return (
    <div className='login-container'>
      <h2>Admin Login</h2>
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

export default AdminLoginForm;