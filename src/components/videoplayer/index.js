/* eslint-disable arrow-body-style */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { values } from 'lodash'
import Clappr from 'clappr'
import PlaybackRatePlugin from 'clappr-playback-rate-plugin'
import DashShakaPlayback from 'dash-shaka-playback'
import ClapprThumbnailsPlugin from 'clappr-thumbnails-plugin'
import parseThumbnailSprite from 'shared/parsers/thumbnails'
import './styles.scss'

export default class VideoPlayer extends Component {
  static propTypes = {
    autoplay: PropTypes.bool.isRequired,
    sources: PropTypes.object.isRequired,
    poster: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    videoId: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.initPlayer()
    window.addEventListener('resize', this.triggerPlayerResize)
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.destroy()
    }
    this.player = null
    window.removeEventListener('resize', this.triggerPlayerResize)
  }


  setRef = (ref) => {
    this.video = ref
  }

  initPlayer = () => {
    const {
      sources,
      poster,
      autoplay,
      timeline,
      videoId,
    } = this.props
    const playableSources = values(sources)

    this.player = new Clappr.Player({
      sources: playableSources,
      poster,
      mute: false,
      height: window.innerHeight - 1,
      width: '100%',
      autoPlay: autoplay ? 1 : 0,
      scrubThumbnails: {
        backdropHeight: 0, // 100 gives a nice effect
        spotlightHeight: 135, // original is 135
        thumbs: parseThumbnailSprite(timeline, videoId),
      },
      plugins: [
        PlaybackRatePlugin,
        DashShakaPlayback,
        ClapprThumbnailsPlugin,
      ],
      playbackRateConfig: {
        defaultValue: '1.0',
        options: [
          { value: '0.25', label: '0.25x' },
          { value: '0.5', label: '0.5x' },
          { value: '0.75', label: '0.75x' },
          { value: '1.0', label: 'Normal' },
          { value: '1.25', label: '1.25x' },
          { value: '1.5', label: '1.5x' },
          { value: '1.75', label: '1.75x' },
          { value: '2.0', label: '2x' },
        ],
      },
    })
    this.player.attachTo(this.video)
  }

  triggerPlayerResize = () => {
    this.player.resize({ width: '100%', height: window.innerHeight - 1 })
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <div id="videoPlayerContainer" ref={this.setRef} />
        {children}
      </div>
    )
  }
}
