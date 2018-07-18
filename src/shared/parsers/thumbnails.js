import ClapprThumbnailsPlugin from 'clappr-thumbnails-plugin'
import { API_ENDPOINT } from 'constants'

export default function parseThumbnailSprite(timeline, videoId) {
  if (!timeline) {
    return []
  }

  const properties = timeline.split('.')[0].split('_')
  const numThumbnails = properties[1]
  const timeInterval = properties[2]
  const tileWidth = properties[3]
  const tileHeight = properties[4]

  return ClapprThumbnailsPlugin.buildSpriteConfig(
    `${API_ENDPOINT}/${videoId}/${timeline}`,
    numThumbnails, // number of thumbnails
    tileWidth, // thumbnail width
    tileHeight, // thumbnail height
    10, // number of tiles (columns) per row
    timeInterval, // time interval
  )
}
