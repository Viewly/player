/* eslint-disable max-len */
import DEV_OPTIONS from './dev-options'

let initialParams = {}

if (process && process.env && process.env.DEV) {
  initialParams = DEV_OPTIONS
}

export const API_URL = 'https://cdn.view.ly'
export const API_VERSION = 'v1'
export const API_ENDPOINT = `${API_URL}/${API_VERSION}`
export const CUSTOM_PARAMS = initialParams

export const SIZE_OPTIONS = {
  viewlyLogoWidth: 42,
  viewlyLogoHeight: 34,
}
