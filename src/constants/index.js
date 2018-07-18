/* eslint-disable max-len */
import DEV_OPTIONS from './dev-options'

let initialParams = {}

if (process && process.env && process.env.DEV) {
  // window.VIEWLY_OPTIONS = DEV_OPTIONS
  initialParams = DEV_OPTIONS
}

export const API_URL = 'https://cdn.view.ly'
export const API_VERSION = 'v1'
export const API_ENDPOINT = `${API_URL}/${API_VERSION}`

export const CUSTOM_PARAMS = initialParams
// const {
//   VIDEO_URL,
//   AUTO_PLAY,
//   VIDEO_ID,
//   HIDE_LOGO = false,
// } = window.VIEWLY_OPTIONS

// export const CUSTOM_PARAMS = {
//   autoplay: AUTO_PLAY,
//   hideLogo: HIDE_LOGO,
//   videoId: VIDEO_ID,
// }

// export const VIDEO_PARAMS = {
//   url: VIDEO_URL,
//   id: VIDEO_ID,
// }

export const SIZE_OPTIONS = {
  viewlyLogoWidth: 42,
  viewlyLogoHeight: 34,
}
