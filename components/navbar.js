import React from 'react'

function Navbar(){
  return(
    <>
      <div className="container">
        <div>
          <div>Logo</div>
          <div>Home</div>
          <div>Search</div>
        </div>
        <div>
          Playlists
          <div>
            Create Playlist
          </div>
          <p>
            Playlist1
          </p>
          <p>
            Playlist2
          </p>
          <p>
            Playlist3
          </p>
          <p>
            Playlist4
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          min-height: 0;
          grid-area: nav-bar;
          background-color: rgba(0,0,0,.8);
          overflow-y: auto;
          width: 230px;
        } 
      `}
      </style>
    </>
  )
}

export default Navbar;