import App from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <>
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
      <style global jsx>{`
              html,
              body {
                margin: 0;
                padding: 0;
                display: flex;
                height: 100vh;
                justify-content: center;
                align-items: center;
                background-color: #121212;

                font-size: 14px;
                line-height: 20px;
                letter-spacing: .015em;
                font-weight: var(--glue-font-weight-normal);
                color: #b3b3b3;
                text-transform: none;
                font-family: spotify-circular,spotify-circular-cyrillic,spotify-circular-arabic,spotify-circular-hebrew,Helvetica Neue,Helvetica,Arial,Hiragino Kaku Gothic Pro,Meiryo,MS Gothic,sans-serif;
              }
              p, h3 {
                margin-block-start: 0;
                margin-block-end: 0;
              }
          `}</style>
      </>
    )
  }
}

export default withReduxStore(MyApp)
