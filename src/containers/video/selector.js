export default state => ({
  loaded: state.video.loaded,
  sources: state.video.sources,
  poster: state.video.poster,
  timeline: state.video.timeline,
  autoPlay: state.params.autoPlay,
  mute: state.params.mute,
})
