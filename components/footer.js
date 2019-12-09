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
        <button className="fav-button" title="Save to your Liked Songs">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
        </button>
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
            bar          </div>
          <div id="now-playing-bar__center__playback-bar__progress-time-start">
            5:00
          </div>
        </div>
      </div>
      <div id="now-playing-bar__right">
        <div id="now-playing-bar__right__inner">
          <div id="ExtraControls">
            <div id="ExtraControls__queue-container">
              <button id="ExtraControls__queue-container__queue-button" title="Queue">
                <img src="http://simpleicon.com/wp-content/uploads/playlist.svg" alt="Queue button" className="ExtraControls__queue-container__queue-button--img"/>
              </button>
            </div>
            <div id="ExtraControls__connect-device__container">
              <button id="ExtraControls__connect-device__container__connect-device-button">
                <img src="https://www.svgrepo.com/show/1308/monitor-tablet-and-smartohone.svg" alt="The button to connect different devices" className="ExtraControls__connect-device__container__connect-device-button--img"/>
              </button>
            </div>
            <div id="volume-bar">
              <button className="mute-button">
                <img src="http://simpleicon.com/wp-content/uploads/volume-max.svg" alt="Mute button" className="mute-button--img"/>
              </button>
              <div className="progress-bar">
                bar                </div>
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
      height: 20vh;
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
    #now-playing-bar__center__playback-bar{
      display: flex;
      justify-content: space-between;
    }
    #ExtraControls{
      display: flex;
    }
    #volume-bar{
      display: flex;
    }
    .fav-button, #ExtraControls__queue-container__queue-button, #ExtraControls__connect-device__container__connect-device-button, .mute-button{
      border: none;
      background: none;
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
    .ExtraControls__queue-container__queue-button--img, .mute-button--img{
      width: 20px;
      height: 20px;
    }
    `}
  </style>
  </>
  )
}

export default Footer;