/* eslint-disable max-len */
import React from 'react'
import queryString from 'query-string'

import { SIZE_OPTIONS } from 'constants'
import './styles.scss'

const Logo = () => {
  const parsed = queryString.parse(document.location.search)
  const hideLogoParam = parsed && parsed.hideLogo === 'true'

  if (hideLogoParam) {
    return null
  }

  return (
    <a href="https://view.ly/" rel="noopener noreferrer" target="_blank" className="viewly__logo">

      <svg
        width={SIZE_OPTIONS.viewlyLogoWidth}
        height={SIZE_OPTIONS.viewlyLogoHeight}
        viewBox="0 0 42 34"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="linearGradient-1">
            <stop stopColor="#009FFF" offset="0%" />
            <stop stopColor="#0085FF" offset="100%" />
          </linearGradient>
          <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="linearGradient-2">
            <stop stopColor="#009FFF" offset="0%" />
            <stop stopColor="#0048FF" offset="100%" />
          </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Viewly---Register" transform="translate(-39.000000, -31.000000)" fillRule="nonzero">
            <g id="Logo" transform="translate(39.000000, 31.000000)">
              <g id="symbol">
                <polygon id="Rectangle-551-Copy-42" fill="url(#linearGradient-1)" points="21 9.58557944 28 0 42 0 42 14.4447477 21.1404771 34 21 34" />
                <g id="Rectangle-551-Copy-41" transform="translate(10.500000, 17.000000) scale(-1, 1) translate(-10.500000, -17.000000) " fill="url(#linearGradient-2)">
                  <polygon id="path-3" points="0 9.56021759 6.95567398 0 20.8643887 0 20.8643887 14.4065293 0.139561129 33.9087562 0 33.9087562" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </a>
  )
}

export default Logo
