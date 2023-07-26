import React from 'react'
import './Advantages.css'

import img1 from '../../../assets/advantage-img-1.png'
import img2 from '../../../assets/advantage-img-2.png'
import img3 from '../../../assets/advantage-img-3.png'

const advantages = [
  {
    title: 'Практикующие преподаватели',
    img: img1,
  },
  {
    title: 'Участие в старт-ап проектах после обучение',
    img: img2,
  },
  {
    title: 'Возможность заработать во время обучения',
    img: img3,
  },
]

const Advantages = () => (
  <div className="container advantages-con">
    <h3 className="section-title">Преимущества обучения у нас</h3>
    <div className="advantages-cards">
      {advantages.map(advantage => (
        <div key={advantage.title} className="advantage-card">
          <div className="advantage-card-img">
            <img src={advantage.img} alt={advantage.title} />
          </div>
          <div className="advantage-card-description">
            <h5>{advantage.title}</h5>
            <p>
              Узнать больше о курсах{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M11.5686 11.6622L13.8607 9.3701C14.1325 9.09827 14.1325 8.65754 13.8607 8.38571L11.5686 6.09363M13.6568 8.87791L3.9118 8.87791"
                  stroke="#4CAF4F"
                  strokeWidth="1.0441"
                  strokeLinecap="round"
                />
              </svg>
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Advantages
