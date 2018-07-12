import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Card as CustomCard,
  Subhead,
  BackgroundImage,
  Divider as BorderLine,
  Progress,
  Box,
  Text,
  Flex,
} from 'rebass'

const CardWrapper = styled(CustomCard)`
  box-shadow: 0 10px 40px 0 rgba(18, 106, 211, 0.07),
    0 2px 9px 0 rgba(18, 106, 211, 0.06);
  cursor: pointer;
`

const CardModal = styled.div`
  /* background: rgba(0, 0, 0, 0.13); */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 350ms ease-in-out;
  transform: scale(${props => (props.show ? '1' : '0')});
  opacity: ${props => (props.show ? '1' : '0')};
`

const CardModalInner = styled.div`
  background: white;
  max-width: 500px;
  position: relative;
  margin: 5rem auto;
  box-shadow: 0 25px 30px -18px rgba(0, 0, 0, 0.28);
`

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  handleModal = event => {
    // console.log(event.pageX, event.pageY)
    this.setState({
      show: !this.state.show,
    })
  }
  render() {
    return (
      <CardWrapper mb={3} p={0} onClick={this.handleModal}>
        <BackgroundImage ratio={1} src={this.props.imageSrc} />
        <Subhead p={2} fontSize={1} fontWeight={400}>
          {this.props.title}
        </Subhead>
        <Subhead p={2} fontSize={0} fontWeight={400} color="gray">
          ID: {this.props.id}
        </Subhead>
        <BorderLine mx={2} borderColor="lightGrey" borderBottom={1} />
        <Flex mx={2} pb={3} alignItems="center">
          <Text children="34%" fontSize={0} pr={1} />
          <Progress value={0.5} color="blue" bg={'red'} />
          <Text children="12" fontSize={0} pl={1} />
        </Flex>
        <CardModal show={this.state.show}>
          <CardModalInner>
            <BackgroundImage ratio={1} src={this.props.imageSrc} />
            <Subhead p={2} fontSize={1} fontWeight={400}>
              {this.props.title}
            </Subhead>
            <Subhead p={2} fontSize={0} fontWeight={400} color="gray">
              ID: {this.props.id}
            </Subhead>
          </CardModalInner>
        </CardModal>
      </CardWrapper>
    )
  }
}

Card.defaultProps = {
  title: 'default title',
}
Card.propTypes = {
  title: PropTypes.string,
  badge: PropTypes.any,
  id: PropTypes.any,
  imageSrc: PropTypes.string,
  progress: PropTypes.any,
  onClick: PropTypes.func,
}

export default Card
