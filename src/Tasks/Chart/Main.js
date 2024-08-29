import React, { useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Filler,
    Tooltip,
    Legend,
    RadialLinearScale,
    ArcElement,
    defaults,

} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    RadialLinearScale,
    ArcElement,
);

const Chart = () => {

    const chartReference = useRef(0);

    const options = {
        plugins: {
            title: {
                display: false,
                text: 'Transactions Overview Chart',
                backgroundColor: "#f4d5a6",
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
        layout: {
            padding: {
                left: 7
            }
        }
    };
    const labels = ["fda", "dfsf"];
    const data = {
        labels,
        datasets: [
            {
                label: 'Wallet Transfer',
                // data: wallTransfData ? wallTransfData.map((item) => { return item.count }) : 0,
                backgroundColor: '#9F2B68',
            },
            {
                label: 'Cash Widthdrawal',
                // data: cashWithData ? cashWithData.map((item) => { return item.count }) : 0,
                backgroundColor: '#008aa7',
            },
            {
                label: 'Cash Deposits',
                // data: cashDepData ? cashDepData.map((item) => { return item.count }) : 0,
                backgroundColor: 'rgb(53, 162, 235)',
            },
        ],
    };

    return (
        <div>
            <Bar ref={chartReference} options={options} data={data} width="400" height="135" />
        </div>
    )
}

export default Chart