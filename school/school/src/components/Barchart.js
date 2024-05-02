import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import '../styles/BarChart.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import PieChart from './Piechart';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Attendance Bar Chart',
        },
    },
};

export default function BarChart() {
    const [barChartData, setBarChartData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/join/'); // Replace '/api/attendance' with your Django API endpoint
                const data = await response.json();

                const presentData = [];
                const absentData = [];
                const labels = [];
                data.forEach((entry) => {
                    
                    labels.push(entry.month); // Assuming date is the field containing labels
                    presentData.push(entry.present); // Change 'present_count' to the appropriate field name for present count
                    absentData.push(entry.absent);
                    
                });
                setBarChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Present',
                            data: presentData,
                            backgroundColor: '#DE8B7F',
                        },
                        {
                            label: 'Absent',
                            data: absentData,
                            backgroundColor: '#181542',
                        },
                        
                    ],
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='charts'>
                <div className='barchart' style={{ width: 600, height: 300 }}>
                    <Bar data={barChartData} options={options} />
                </div>
                <div className='Piechart'>
                    <PieChart />
                </div>
            </div>
        </>
    );
}
//import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';

// function AttendanceView() {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchAttendanceData();
//   }, []);

//   const fetchAttendanceData = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/attendance/');
//       setAttendanceData(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching attendance data:', error);
//       setLoading(false);
//     }
//   };

//   // Process data for the chart
//   const processDataForChart = () => {
//     const labels = attendanceData.map(item => item.name);
//     const attendanceValues = attendanceData.map(item => item.attendance);

//     return {
//       labels: labels,
//       datasets: [
//         {
//           label: 'Attendance',
//           backgroundColor: 'rgba(75,192,192,1)',
//           borderColor: 'rgba(0,0,0,1)',
//           borderWidth: 2,
//           data: attendanceValues
//         }
//       ]
//     };
//   };

//   return (
//     <div>
//       <h1>Attendance Details</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <Bar
//             data={processDataForChart()}
//             options={{
//               title: {
//                 display: true,
//                 text: 'Attendance Chart',
//                 fontSize: 20
//               },
//               legend: {
//                 display: true,
//                 position: 'right'
//               }
//             }}
//           />
//           <hr />
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Attendance</th>
//                 <th>Section</th>
//               </tr>
//             </thead>
//             <tbody>
//               {attendanceData.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td>{item.attendance}</td>
//                   <td>{item.section}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       )}
//     </div>
//   );
// }

// export default AttendanceView;
