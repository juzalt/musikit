import React from 'react';

function ItemCard() {
  return(
    <>
      <div className="item-card-container">
        <img src="https://i.scdn.co/image/ab67706f00000002026bb258da135fa6d8744b0c" alt="Section cover" className="item-card-container__img"/>
        <h3 className="item-card-container__genre-title">Impulso Creativo</h3>
        <p className="item-card-container__genre-desc">Electrónica suave para inspirarte mientras...</p>
      </div>
    <style jsx>{`
    .item-card-container{
      background-color: hsla(0,0%,100%,.3);
      padding: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 0;
      border-radius: 8px;
      max-width: min-content;
    }
    .item-card-container__img{
      height: 130px;
      width: 130px;
    }
    .item-card-container__genre-title{
      margin-block-start: 1em;
      font-size: 15px;
      color: #fff;
    }
    .item-card-container__genre-desc{
      font-size: smaller;
    }
      `}</style>
    </>
  )
}

export default ItemCard;