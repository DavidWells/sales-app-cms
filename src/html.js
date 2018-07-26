import React from 'react'
import Helmet from 'react-helmet'
// import { connect } from 'unistore/react'
import favicon from './favicon.ico'

let stylesStr
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

export default class HTML extends React.Component {
  render() {
    const head = Helmet.rewind()
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600|Montserrat:600|Rubik&amp;subset=hebrew"
            rel="stylesheet"
          />
          {css}
          <link
            href="/img/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#000000"
          />
          <link
            rel="apple-touch-icon"
            href="/icons/apple-icon-57x57.png"
            sizes="57x57"
          />
          <link
            rel="apple-touch-icon"
            href="/icons/apple-icon-60x60.png"
            sizes="60x60"
          />
          <link
            rel="apple-touch-icon"
            href="/icons/apple-icon-72x72.png"
            sizes="72x72"
          />
          <link
            rel="apple-touch-icon"
            href="/icons/apple-icon-76x76.png"
            sizes="76x76"
          />
          <link
            rel="apple-touch-icon"
            href="/icons/apple-icon-114x114.png"
            sizes="114x114"
          />
          <link
            rel="apple-touch-icon"
            href="/icons/apple-icon-120x120.png"
            sizes="120x120"
          />
          <link
            rel="apple-touch-icon"
            href="/icons/apple-icon-144x144.png"
            sizes="144x144"
          />
          <link
            rel="apple-touch-icon"
            href="/icons/apple-icon-152x152.png"
            sizes="152x152"
          />
          <link
            rel="apple-touch-icon"
            href="/icons/apple-icon-180x180.png"
            sizes="180x180"
          />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/favicon-96x96.png"
          />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          <script
            dangerouslySetInnerHTML={{
              __html: `
              document.addEventListener('gesturestart', function (e) {
                e.preventDefault();
            });
        `,
            }}
          />
        </body>
      </html>
    )
  }
}
