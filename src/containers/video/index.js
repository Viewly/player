import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Videoplayer } from 'components'
import * as videoplayerActions from 'redux-modules/video'
import selector from './selector'

@connect(selector, dispatch => ({
  fetchVideoManifest: bindActionCreators(videoplayerActions.fetchVideoManifest, dispatch),
}))
export default class VideoContainer extends Component {
  static propTypes = {
    sources: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    poster: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    autoplay: PropTypes.bool.isRequired,
    mute: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    fetchVideoManifest: PropTypes.func.isRequired,
    videoId: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { fetchVideoManifest, videoId } = this.props

    fetchVideoManifest(videoId)
  }

  render() {
    const {
      autoplay,
      sources,
      poster,
      timeline,
      videoId,
      children,
      loaded,
      mute,
    } = this.props

    return loaded && (
      <Videoplayer
        sources={sources}
        poster={poster}
        timeline={timeline}
        autoplay={autoplay}
        mute={mute}
        videoId={videoId}
      >
        {children}
      </Videoplayer>
    )
  }
}
