import React from "react";
import {Chart as ChartJS,ArcElement,Legend,Tooltip} from 'chart.js';
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement,Legend,Tooltip)

const data ={
    labels:["Hod","Ahod","Teachers"],
    datasets:[
    {
    label:"staffs",
    data:[3,5,12],
    backgroundColor:[
        // "rgb(255, 99, 132, 0.2)",
        "whitesmoke",
        // "rgb(54, 162, 235, 0.2)",
        "#DE8B7F",
        "#181542"
    ],
    borderColor:[
        "rgb(255, 99, 132, 0.2)",
        "rgb(54, 162, 235, 0.2)",
        "rgb(255, 206, 86, 0.2)"
    ],
    borderWidth: 1
},
],
};

export default function PieChart(){
    return(
     <div style={{ height:400, width:400,}}>
       <Pie data={data}/>
     </div>
    );
}