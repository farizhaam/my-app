import React from 'react';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';
  
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );
  
  import {Doughnut} from 'react-chartjs-2';

  const data = {
    labels: [
      'Smartphones',
      'Laptops',
      'Fragrances',
      'Skincares',
      'Groceries',
      'Home-Decors'
  ],
  datasets: [{
    data: [3476, 5446, 216, 187, 164, 202],
    backgroundColor: [
    '#18112C',
    '#231942',
    '#5E548E',
    '#5E548E',
    '#BE95C4',
    '#E0B1CB',
    ],
    hoverBackgroundColor: [
    '#291D49',
    '#372768',
    '#FFCE56',
    '#BFAED6',
    '#CEB1D3',
    '#EED3E2'
    ]
  }]
  };
  
  export default () => (
  <div className="container">
    <h1>Expense Distribution</h1>
    <Doughnut
       data={data}
       width={10}
       height={10}
    />
  </div>
  );