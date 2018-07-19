import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import queryString from 'query-string'

import { Logo } from 'components'
import { VideoContainer } from 'containers'
import * as paramsActions from 'redux-modules/params'
import selector from './selector'

import './styles.scss'

@connect(selector, dispatch => ({
  updateParams: bindActionCreators(paramsActions.updateParams, dispatch),
}))
export default class AppContainer extends Component {
  static propTypes = {
    hideLogo: PropTypes.bool.isRequired,
    videoId: PropTypes.string.isRequired,
    updateParams: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { updateParams } = this.props
    const parsed = queryString.parse(document.location.search)

    updateParams(parsed)
  }

  render() {
    const { hideLogo, videoId } = this.props

    return (
      <div className="viewly__container">
        {videoId && (
          <VideoContainer videoId={videoId}>
            {!hideLogo && <Logo />}
          </VideoContainer>
        )}
      </div>
    )
  }
}
