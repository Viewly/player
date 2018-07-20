/* eslint-disable arrow-body-style */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { values } from 'lodash/core'
import Clappr from 'clappr'
import DashShakaPlayback from 'dash-shaka-playback'
import ClapprThumbnailsPlugin from 'clappr-thumbnails-plugin'
import PlaybackSpeedPlugin from 'clappr-playback-speed/dist/main.min'
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

    // TODO - make smarter way of putting "fallback" at the end of array, this just works for now
    const playableSources = values(sources).reverse()

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
        PlaybackSpeedPlugin,
        DashShakaPlayback,
        ClapprThumbnailsPlugin,
      ],
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
