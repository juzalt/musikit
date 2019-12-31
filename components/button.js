import React from 'react'

const Button = (props) => { 

  return (
    <>
      <a href="/home"><button>{props.title}</button></a>
      <style jsx>{`
        button {
          height: 3em;
          width: 5em;
          color: white;
          font-weight: bold;
          text-transform: uppercase;
          background-color: black;
        }
        button:hover {
          background: green;
          color: white;
          transition-duration: 0.4s;
        }
      `}</style>
    </>
  );
}

export default Button