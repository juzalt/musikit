import React, { useState, useEffect } from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function Home(){
  const [accessToken, setAccessToken] = useState([]);
  const client_id = "264039d0ce2e4ec9a32cf3d2be5905e7";
  const client_secret = "e34a9d239e4d42cda94baeb04c3a9760";

  useEffect(() => {
    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => console.error(error))
  })


  return(
  <>
    <div className="home__top-container">
      <Navbar/>
        <div className="main-view">
          <p>Recently played</p>
          <div>recently played albums container</div>
        </div>
      <Footer/> 
    </div>
  <style jsx>{`
    .home__top-container {
      background-color: hsla(0,0%,100%,.3);
      display: grid;
      min-height: 100vh;
      width: 100vw;
      position: relative;
      grid-template-rows: 1fr auto;
      grid-template-columns: auto 1fr;
      grid-template-areas:
        "nav-bar main-view"
        "footer footer"
    }
  `}</style>
  </>
  )
}

export default Home