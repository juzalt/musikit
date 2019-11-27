import React from 'react';
import Footer from '../components/footer';

function Home(){
  return(
  <>
    {/*<Sidebar>*/}
    <div className="home__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mme_de_Maintenon.jpg"
          alt="placeholder"
           />
    </div>
    <Footer/> 
  <style jsx>{`
    .home__container {
      background-color: hsla(0,0%,100%,.3);
    }
  `}</style>
  </>
  )
}

export default Home