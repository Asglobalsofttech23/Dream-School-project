import React, { useState, useEffect } from "react";
import axios from "axios";
import '../Teachers/Teachers.css';  
import schlogo from '../students/schlogo.png';

const initialFormState = {
  id: null,
  name: "",
  subject: "",
  contact: "",
  address: "",
};

function Teachers() {
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
    <div className="teachers">
      <img src={schlogo}/>
      <h1 className="teacherhead">School Management System</h1>
      <div className="teachers-list">
        <table className="viewteatable">
          <thead>
            <tr>
              <th className="th1">Teacher Name</th>
              <th className="th1">Subject</th>
              <th className="th1">Contact</th>
              <th className="th1">Address</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td className="td1">{teacher.name}</td>
                <td className="td1">{teacher.subject}</td>
                <td className="td1">{teacher.contact}</td>
                <td className="td1">{teacher.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teachers;
