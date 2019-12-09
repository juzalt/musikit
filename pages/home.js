import React, { useState, useEffect } from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function Home(){


  return(
  <>
    <div className="home__top-container">
      <Navbar/>
        <div className="main-view">
          <div className="section-header">
            <h2 className="main-view__section-title">Focus</h2>
            <p>Music to help you concentrate.</p>
          </div>
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
      grid-template-rows: 1fr 20%;
      grid-template-columns: auto 1fr;
      grid-template-areas:
        "nav-bar main-view"
        "footer footer"
    }
    .main-view__section-title {
      font-size: 28px;
      line-height: 1.6;
      font-weight: 600;
      letter-spacing: -.36px;
      display: inline;
      white-space: nowrap;
      color: #fff;
      font-family: spotify-circular,spotify-circular-cyrillic,spotify-circular-arabic,spotify-circular-hebrew,Helvetica Neue,Helvetica,Arial,Hiragino Kaku Gothic Pro,Meiryo,MS Gothic,sans-serif;
    }
  `}</style>
  </>
  )
}

export default Home