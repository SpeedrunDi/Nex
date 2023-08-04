import React from 'react'
import './Advantages.css'

import img1 from '../../../assets/advantage-img-1.png'
import img2 from '../../../assets/advantage-img-2.png'
import img3 from '../../../assets/advantage-img-3.png'

const advantages = [
  {
    title: 'Практикующие преподаватели',
    img: img1,
    description:
      'Наши менторы имеют богатый преподавательский опыт, являются действующими специалистами и их обучение ' +
      'строится на основе реальных ИТ кейсов а банковской сфере',
  },
  {
    title: 'Участие в старт-ап проектах после обучения',
    img: img2,
    description:
      'После обучения, пройдя успешно тестирование на базу ваших знаний, мы без проблем возьмем вас к нам на ' +
      'стажировку, где вы примите участие в разработке старт-ап проектов',
  },
  {
    title: 'Возможность заработать во время обучения',
    img: img3,
    description:
      'Как мотивацией для вас, мы внедрили систему поощрения. Самый способный ученик получает возможность ' +
      'помогать менторам с ребятами, которые не успевают и при этом получать символическую плату',
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
            <p>{advantage.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Advantages
