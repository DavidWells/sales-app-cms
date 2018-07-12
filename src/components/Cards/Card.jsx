import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card as CustomCard, Subhead, BackgroundImage } from 'rebass'

const CardWrapper = styled.div``

const Card = props => {
  return (
    <CardWrapper className="card-wrapper">
      <CustomCard mb={3}>
        <BackgroundImage
          ratio={1}
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
        />
        <Subhead p={2} fontSize={1}>
          {props.title}
        </Subhead>
        <Subhead p={2} fontSize={1}>
          {props.id}
        </Subhead>
      </CustomCard>
    </CardWrapper>
  )
}

Card.defaultProps = {
  title: 'default title',
}
Card.propTypes = {
  title: PropTypes.string,
  badge: PropTypes.any,
  id: PropTypes.any,
  imageSrc: PropTypes.string,
}

export default Card
