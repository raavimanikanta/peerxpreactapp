import {useEffect, useState} from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

const Horizontalchart =() => {
    const [data, setData] = useState({
        labels:['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'],
        datasets: [
          {
            // label: 'Dataset 1',
            data:[2,5,3,7,11,6,8,5,1,9,7,10],
            borderColor: 'blue',
            backgroundColor: 'green',
          },
        ],
      });
    
   
    return(
        <div style={{width:'50%', height:'100%'}} className="graph">
            <h2>Monthly-Posts-Graph:</h2>
           
            <Bar data={data} options={options}/>



         </div>)
}
export default Horizontalchart;