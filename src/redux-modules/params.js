import { CUSTOM_PARAMS } from 'constants'
import { mapValues } from 'lodash'

const UPDATE_PARAMS = 'mediaplayer/params/UPDATE'

const initialState = {
  videoId: '',
  autoplay: false,
  hideLogo: false,
  mute: false,
  ...CUSTOM_PARAMS,
}

function reducer(state = initialState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case UPDATE_PARAMS:
      return { ...state, ...payload }
    default:
      return state
  }
}

export function updateParams(params) {
  return {
    type: UPDATE_PARAMS,
    payload: mapValues(params, (item) => {
      if (item === 'true') {
        return true
      } else if (item === 'false') {
        return false
      }
      return item
    }),
  }
}

export default reducer
