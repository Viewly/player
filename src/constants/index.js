import DEV_OPTIONS from './dev-options'

export const API_URL = process.env.API === 'production' ? 'https://cdn.view.ly' : 'https://cdn-dev.view.ly'
export const SITE_URL = process.env.API === 'production' ? 'https://view.ly' : 'https://staging.view.ly'
export const API_VERSION = 'v1'
export const API_ENDPOINT = `${API_URL}/${API_VERSION}`
export const CUSTOM_PARAMS = process.env.DEV ? DEV_OPTIONS : {}

export const SIZE_OPTIONS = {
  viewlyLogoWidth: 42,
  viewlyLogoHeight: 34,
}
