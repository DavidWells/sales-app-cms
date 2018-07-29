import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Box } from 'rebass'
import styled from '../../../node_modules/styled-components'

const data = {
  labels: ['Visitors', 'Buyers', 'Stores'],
  datasets: [
    {
      data: [300, 150, 100],
      backgroundColor: [
        'rgba(61, 193, 211, 0.7)',
        'rgba(9, 132, 227, 0.7)',
        'rgba(232, 67, 147, 0.68)',
      ],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
}

const LineChartWrapper = styled(Box)``

const PieChart = props => (
  <LineChartWrapper {...props}>
    <Doughnut data={data} />
  </LineChartWrapper>
)

export default PieChart
