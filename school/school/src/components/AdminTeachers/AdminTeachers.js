import React, { useState, useEffect } from "react";
import axios from "axios";
import '../AdminTeachers/AdminTeacher.css';
import schlogo from '../logins/schlogo.png';
import { Link } from 'react-router-dom'; 

const initialFormState = {
  id: null,
  name: "",
  subject: "",
  contact: "",
  address: "",
};

function AdminTeachers() {
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/teachers/");
      setTeachers(response.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.subject || !formData.contact || !formData.address)
      return;

    if (isEditing) {
      await updateTeacher(formData);
    } else {
      await addTeacher(formData);
    }

    setFormData(initialFormState);
    setIsEditing(false);
    setEditId(null);
  };

  const addTeacher = async (teacher) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/teachers/", teacher);
      setTeachers([...teachers, response.data]);
    } catch (error) {
      console.error("Error adding teacher:", error);
    }
  };

  const updateTeacher = async (updatedTeacher) => {
    try {
      await axios.put(`http://127.0.0.1:8000/teachers/${editId}`, updatedTeacher);
      setTeachers(
        teachers.map((teacher) =>
          teacher.id === editId ? updatedTeacher : teacher
        )
      );
    } catch (error) {
      console.error("Error updating teacher:", error);
    }
  };

  const deleteTeacher = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/teachers/${id}`);
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const editTeacher = (id) => {
    const teacherToEdit = teachers.find((teacher) => teacher.id === id);
    setFormData(teacherToEdit);
    setIsEditing(true);
    setEditId(id);
  };
  return (
    <div className="adminteachers">
       <img src={schlogo}/>
      <h1>School Management System</h1>
      <div className="form-container">
        <form  className="adminteaform" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Teacher Name"
          />
          <input
          className="adminteainput"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject"
          />
          <input
          className="adminteainput"
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="Contact"
          />
          <input
          className="adminteainput"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
          />
          <button className="adminteabtn" type="submit">
            {isEditing ? "Update Teacher" : "Add Teacher"}
          </button>
        </form>
      </div>
      <div className="teachers-list">
        <table className="adminteatable">
          <thead>
            <tr>
              <th className="adminteath">Teacher Name</th>
              <th className="adminteath">Subject</th>
              <th className="adminteath">Contact</th>
              <th className="adminteath">Address</th>
              <th className="adminteath">Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td className="adminteatd">{teacher.name}</td>
                <td className="adminteatd">{teacher.subject}</td>
                <td className="adminteatd">{teacher.contact}</td>
                <td className="adminteatd">{teacher.address}</td>
                <td className="adminteabtntd" >
                  <button
                    className="adminteabtn1"
                    onClick={() => editTeacher(teacher.id)}
                  >
                    Edit
                  </button>
                  <button
                   className="adminteabtn1"
                    onClick={() => deleteTeacher(teacher.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="adminteabackdiv">
      <button className='adminteaback'><Link to="/adminloginform">Back </Link></button>
      </div>
    </div>
  );
}

export default AdminTeachers;
