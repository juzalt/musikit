import React from 'react'

function Footer(){
  return (
  <>
    <div id="container">
      <div id="now-playing-bar__left">
        <div>box with album cover</div>
        <div id="now-playing-bar__left__track-info">
          <p id="now-playing-bar__left__track-info__track-title">Track title</p>
          <p id="now-playing-bar__left__track-info__artist-name">Artist name</p>
        </div>
        <button className="fav-button" title="Save to your Liked Songs"/>
      </div>
      <div id="now-playing-bar__center">
        <div id="now-playing-bar__center__basic-controls">
          <button className="now-playing-bar__center__basic-controls __shuffle" title="Shuffle" >
            <img src="http://simpleicon.com/wp-content/uploads/shuffle.svg" alt="shuffle icon" className="now-playing-bar__center__basic-controls--img"/>
          </button>
          <button className="now-playing-bar__center__basic-controls __backwards" title="Backwards">
          <img src="http://simpleicon.com/wp-content/uploads/arrow-19.svg" alt="shuffle icon" className="now-playing-bar__center__basic-controls--img"/>
          </button>
          <button className="now-playing-bar__center__basic-controls __play" title="Play">
          <img src="http://simpleicon.com/wp-content/uploads/play1.svg" alt="shuffle icon" className="now-playing-bar__center__basic-controls--img"/>
          </button>
          <button className="now-playing-bar__center__basic-controls __forward" title="Forward">
          <img src="http://simpleicon.com/wp-content/uploads/forward.svg" alt="shuffle icon" className="now-playing-bar__center__basic-controls--img"/>
          </button>
          <button className="now-playing-bar__center__basic-controls __repeat" title="Repeat">
          <img src="https://www.svgrepo.com/show/43127/replay.svg" alt="shuffle icon" className="now-playing-bar__center__basic-controls--img"/>
          </button>
        </div>
        <div id="now-playing-bar__center__playback-bar">
          <div id="now-playing-bar__center__playback-bar__progress-time-start">
            0:00
          </div>
          <div className="progress-bar">
            this will have funcitons that play with the x axis
          </div>
          <div id="now-playing-bar__center__playback-bar__progress-time-start">
            5:00
          </div>
        </div>
        <div id="now-playing-bar__right">
          <div id="now-playing-bar__right__inner">
            <div id="ExtraControls">
              <div id="ExtraControls__queue-container">
                <button id="ExtraControls__queue-container__queue-button" title="Queue"/>
              </div>
              <div id="ExtraControls__connect-device__container">
                <button id="ExtraControls__connect-device__container__connect-device-button"/>
              </div>
              <div id="volume-bar">
                <button className="mute-button"/>
                <div className="progress-bar">
                  this will have funcitons that play with the x axis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <style jsx>
    {`
    #container {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
      display: flex;
      justify-content: space-evenly; 
      background-color: #282828;
    }
    #now-playing-bar__left{
      display: flex;
    }
    #now-playing-bar__left__track-info{
      display: flex;
      flex-direction: column;
    }
    .now-playing-bar__center__basic-controls{
      border: none;
      background: none;
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
    .now-playing-bar__center__basic-controls--img{
      width: 20px;
      height: 20px;
    }
    `}
  </style>
  </>
  )
}

export default Footer;