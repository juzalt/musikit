import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import ImpulsoCreativo from '../components/impulsoCreativo'
import ItemCard from '../components/itemCard'

function Home(){


  return(
  <>
    <div className="home__top-container">
      <Navbar/>
        <div className="main-view">
          <div className="section-container">
            <div className="section-container__section-header">
              <h2 className="section-container__section-header__section-title">Focus</h2>
              <p>Music to help you concentrate.</p>
            </div>
            <div className="all-item-cards-container">
              <ItemCard/>
            </div>
          </div>
          <div>recently played albums container</div>
        </div>
      <Footer/> 
    </div>
  <style jsx>{`
    .home__top-container {
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
    .section-container__section-header{
      padding-left: 34px;
    }
    .section-container__section-header__section-title {
      font-size: 28px;
      line-height: 1.6;
      font-weight: 600;
      letter-spacing: -.36px;
      display: inline;
      white-space: nowrap;
      color: #fff;
      font-family: spotify-circular,spotify-circular-cyrillic,spotify-circular-arabic,spotify-circular-hebrew,Helvetica Neue,Helvetica,Arial,Hiragino Kaku Gothic Pro,Meiryo,MS Gothic,sans-serif;
    }
    .all-item-cards-container{
      display: flex;
      flex-wrap: no-wrap;
      justify-content: space-around;
    }
  `}</style>
  </>
  )
}

export default Home