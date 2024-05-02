import React, { useState, useEffect } from 'react';
import '../styles/EnquiryOverview.css';

const EnquiryOverview = () => {
  // State to store enquiry data
  const [enquiries, setEnquiries] = useState([]);

  // Mock data for enquiries (replace with your actual data fetching logic)
  const mockEnquiries = [
    { category: 'Admissions', count: 25, total: 50 },
    { category: 'General Inquiries', count: 15, total: 30 },
    { category: 'Student Services', count: 10, total: 20 },
  ];

  // useEffect to fetch data (replace with your actual data fetching logic)
  useEffect(() => {
    // Simulating data fetching
    setEnquiries(mockEnquiries);
  }, []);

  return (
    <div className='Enquiry1'>
      <h2>Enquiry Overview</h2>
      {enquiries.map((enquiry, index) => (
        <div key={index}>
          <p>{enquiry.category}</p>
          <div style={{ border: '1px solid #ccc', borderRadius: '5px', width: '300px' }}>
            <div style={{ backgroundColor: '#007bff', width: `${(enquiry.count / enquiry.total) * 100}%`, height: '20px', borderRadius: '5px' }}>
              <span style={{ color: 'white', fontWeight: 'bold' }}>{`${(enquiry.count / enquiry.total) * 100}%`}</span>
            </div>
          </div>
          <p>{`${enquiry.count}/${enquiry.total}`}</p>
        </div>
      ))}
    </div>
  );
};

export default EnquiryOverview;
