import React from 'react'
import './Promo.css'

import MainBG from '../../assets/042039b8-6e33-434a-8685-4f72174aeaf7.gif.webp'

const Promo = ({ title, subtitle }) => (
  <div className="promo">
    <div className="container main-promo">
      <div className="main-promo-left">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button type="button">Узнать больше</button>
      </div>
      <div className="main-promo-right">
        <img src={MainBG} alt="" />
      </div>
    </div>
  </div>
)

export default Promo
