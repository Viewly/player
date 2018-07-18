import api from 'shared/api'
import { mapValues } from 'lodash'
import { API_URL } from 'constants'

const VIDEO_MANIFEST_FETCH_REQUEST = 'mediaplayer/video/VIDEO_MANIFEST_FETCH_REQUEST'
const VIDEO_MANIFEST_FETCH_SUCCESS = 'mediaplayer/video/VIDEO_MANIFEST_FETCH_SUCCESS'
const VIDEO_MANIFEST_FETCH_ERROR = 'mediaplayer/video/VIDEO_MANIFEST_FETCH_ERROR'
const SET_VIDEO_ID = 'mediaplayer/video/SET_VIDEO_ID'

const initialState = {
  sources: {},
  poster: '',
  timeline: '',
}

function makeApiUrl(relative) {
  return `${API_URL}/${relative}`
}

function reducer(state = initialState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case VIDEO_MANIFEST_FETCH_SUCCESS:
      return {
        ...state,
        poster: makeApiUrl(payload.cover),
        sources: mapValues(payload.formats, val => makeApiUrl(val)),
        timeline: payload.timeline,
      }
    case SET_VIDEO_ID:
      return { ...state, id: payload }
    default:
      return state
  }
}

export function setVideoId(videoId) { return { type: SET_VIDEO_ID, payload: videoId } }

export function fetchVideoManifest(videoId) {
  return async (dispatch) => {
    let video

    dispatch({ type: VIDEO_MANIFEST_FETCH_REQUEST })
    try {
      video = await api.get(`/${videoId}/manifest.json`)
      dispatch({ type: VIDEO_MANIFEST_FETCH_SUCCESS, payload: video.data })
    } catch (e) {
      dispatch({ type: VIDEO_MANIFEST_FETCH_ERROR, e })
    }
  }
}

export default reducer
