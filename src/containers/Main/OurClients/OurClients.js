import React from 'react'
import './OurClients.css'

const companies = [
  {
    title: 'Компания №1',
  },
  {
    title: 'Компания №2',
  },
  {
    title: 'Компания №3',
  },
  {
    title: 'Компания №4',
  },
]

const OurClients = () => (
  <div className="container our-clients-con">
    <h3 className="section-title">Наши клиенты</h3>
    <div className="companies">
      {companies.map(company => (
        <div data-aos="flip-up" key={company.title} className="company">
          <h5>{company.title}</h5>
        </div>
      ))}
    </div>
  </div>
)

export default OurClients
