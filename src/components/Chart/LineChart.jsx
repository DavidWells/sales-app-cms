import React from 'react'
import { Line } from 'react-chartjs-2'
import { Box } from 'rebass'
import styled from '../../../node_modules/styled-components'

const data = {
  labels: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Sales chart',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [2, 4, 5, 5.1, 6, 8, 9],
    },
  ],
}

const LineChartWrapper = styled(Box)``

const LineChart = props => (
  <LineChartWrapper {...props}>
    <Line data={data} />
  </LineChartWrapper>
)

export default LineChart
