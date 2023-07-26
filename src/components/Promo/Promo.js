import React from 'react'
import './Promo.css'

import MainBG from '../../assets/Illustration.png'

const Promo = () => (
  <div className="container main-promo">
    <div className="main-promo-left">
      <h1>Войди в IT вместе с Nex-gen EXcellence</h1>
      <p>Курсы IT в Бишкеке</p>
      <button type="button">Узнать больше</button>
    </div>
    <div className="main-promo-right">
      <img src={MainBG} alt="" />
    </div>
  </div>
)

export default Promo
