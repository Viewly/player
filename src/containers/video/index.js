import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Videoplayer } from 'components'
import * as videoplayerActions from 'redux-modules/video'

class VideoContainer extends Component {
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
    } = this.props

    return loaded && (
      <Videoplayer
        sources={sources}
        poster={poster}
        timeline={timeline}
        autoplay={autoplay}
        videoId={videoId}
      >
        {children}
      </Videoplayer>
    )
  }
}

VideoContainer.propTypes = {
  sources: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  poster: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired,
  autoplay: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  fetchVideoManifest: PropTypes.func.isRequired,
  videoId: PropTypes.string.isRequired,
}

export default connect(
  state => ({
    loaded: state.video.loaded,
    sources: state.video.sources,
    poster: state.video.poster,
    timeline: state.video.timeline,
    autoplay: state.params.autoplay,
  }),
  {
    fetchVideoManifest: videoplayerActions.fetchVideoManifest,
  },
)(VideoContainer)
