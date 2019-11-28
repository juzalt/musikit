import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function Home(){
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
      min-height: 100%;
      width: 100%;
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