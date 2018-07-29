import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LineChart from '../components/Chart/LineChart'
import { Box, Card, Flex, Avatar, Image, Progress, Text } from 'rebass'
import BottomNavBar from '../components/BottonNavBar'
import avatarImage from '../assets/user.png'
import statsIcon from '../assets/growth.svg'
import PieChart from '../components/Chart/PieChart'

const ListItem = styled(Box)``

const BlueGradient = styled(Box)`
  background: linear-gradient(
    to right top,
    #2256a6,
    #096bb7,
    #007fc6,
    #0094d2,
    #15a8dd
  );
  color: white;
`

class Charts extends Component {
  render() {
    return (
      <div className="charts-page">
        <Card mb={3}>
          <LineChart />
        </Card>

        <Card p={0} mb={3}>
          <Flex alignItems="center" justifyContent="space-between">
            <ListItem p={3}>
              <Image src={avatarImage} width={40} />
            </ListItem>
            <ListItem p={3}>
              Average Daily
              <Progress value={0.5} color="#3190f0" />
            </ListItem>
            <BlueGradient p={4} bg={'blueGradient'}>
              $37,000
            </BlueGradient>
          </Flex>
        </Card>

        <Flex flexWrap="wrap" mb={3}>
          <Box width={[1, 1 / 3]} p={1}>
            <Card>
              <Text fontSize={3} textAlign="center" fontWeight="bold">
                82
              </Text>
              <Text fontSize={0} textAlign="center" color="gray">
                Miles
              </Text>
              <Text fontSize={1} textAlign="center">
                Driven
              </Text>
            </Card>
          </Box>
          <Box width={[1, 1 / 3]} p={1}>
            <Card>
              <Text fontSize={3} textAlign="center" fontWeight="bold">
                82
              </Text>
              <Text fontSize={0} textAlign="center" color="gray">
                Miles
              </Text>
              <Text fontSize={1} textAlign="center">
                Driven
              </Text>
            </Card>
          </Box>
          <Box width={[1, 1 / 3]} p={1}>
            <Card>
              <Text fontSize={3} textAlign="center" fontWeight="bold">
                82
              </Text>
              <Text fontSize={0} textAlign="center" color="gray">
                Miles
              </Text>
              <Text fontSize={1} textAlign="center">
                Driven
              </Text>
            </Card>
          </Box>
        </Flex>

        <Card p={0} mb={3}>
          <Box px={3} pt={3}>
            <Text color={'grey'}> Unique Visitors</Text>
          </Box>
          <Flex alignItems="center" justifyContent="space-between">
            <ListItem p={3}>
              <Image src={statsIcon} width={40} />
            </ListItem>
            <ListItem p={3}>
              <Text fontWeight="900" fontSize={4}>
                65,21,542
              </Text>
            </ListItem>
            <ListItem p={3}>
              <Text color="gray" fontSize={0}>
                Stats
              </Text>
              <Text color="gray" fontSize={0}>
                Analytics
              </Text>
              <Text color="gray" fontSize={0}>
                Insights
              </Text>
            </ListItem>
          </Flex>
        </Card>

        <Card p={0} mb={3}>
          <PieChart />
        </Card>

        <BottomNavBar
          text="Done"
          //   buttonDisabled={this.props.improvePageSelectedItems > 0}
          //   buttonClick={() => this.updateTaskAndRedirect()}
          location={this.props.location}
          type="improve"
        />
      </div>
    )
  }
}

Charts.propTypes = {}

export default Charts
