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
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600|Montserrat:600"
            rel="stylesheet"
          />
          {css}
          <link
            href="/img/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />
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
