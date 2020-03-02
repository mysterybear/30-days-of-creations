import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core';
import tw from 'tailwind.macro';

import Header from './header'
import './layout.css'

const divStyles = [
  tw`my-0 mx-auto pt-0 px-4 pb-6 max-w-3xl`,
  css`background-color: pink;`
];

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div css={divStyles}>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
