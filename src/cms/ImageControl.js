import React from 'react'
import PropTypes from 'prop-types'
const style = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

export default class ImageControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props

    return (
      <div style={style} className={classNameWrapper}>
        <img width="150" src={value} style={{ marginRight: '1rem' }} />
        <input
          className={classNameWrapper}
          placeholder="Add image url"
          type="text"
          id={forID}
          value={value || ''}
          onChange={e => onChange(e.target.value)}
          onFocus={setActiveStyle}
          onBlur={setInactiveStyle}
        />
      </div>
    )
  }
}
