import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import queryString from 'query-string'

import { Logo } from 'components'
import { VideoContainer } from 'containers'
import * as videoplayerActions from 'redux-modules/video'
import * as paramsActions from 'redux-modules/params'
import './styles.scss'

class AppContainer extends Component {
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

AppContainer.propTypes = {
  hideLogo: PropTypes.bool.isRequired,
  videoId: PropTypes.string.isRequired,
  updateParams: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    videoId: state.params.videoId,
    hidePlayButton: state.params.hidePlayButton,
    hideLogo: state.params.hideLogo,
  }),
  {
    play: videoplayerActions.play,
    updateParams: paramsActions.updateParams,
  },
)(AppContainer)
