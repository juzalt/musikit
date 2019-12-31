import React from 'react'
import Button from '../components/button'

const Login = () =>
  {
    return (
      <>
        <div id="container">
          <div id="hero-container">
          <h1 className="message-main">Press on the button below to login to your Spotify account. I swear this isn't a scam.</h1>
          <Button title={"Login"}/> 
          </div>
        </div>
        <style jsx>{`
          #container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          #hero-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 75%;
          }
          .message-main {
            width: 60%;
            font-weight: bold;
            line-height: 1em;
            text-align: center;
          } 
          `}</style>
      </>
    )
  }

export default Login