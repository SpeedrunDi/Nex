import React from 'react'
import './Employees.css'

import Imran from '../../assets/Imran.png'
import Bakai from '../../assets/Bakai.png'
import Jamilia from '../../assets/Jamilia.png'
import Aziret from '../../assets/Aziret.png'
import Ajar from '../../assets/Ajar.png'
import Aman from '../../assets/Aman.png'

const employees = [
  {
    name: 'Imran',
    avatar: Imran,
    post: 'CEO и основатель',
    aos: 'fade-down-right',
  },
  {
    name: 'Bakai',
    avatar: Bakai,
    post: 'Директор',
    aos: 'fade-down',
  },
  {
    name: 'Jamilia',
    avatar: Jamilia,
    post: 'Java Backend Developer',
    aos: 'fade-down-left',
  },
  {
    name: 'Aziret',
    avatar: Aziret,
    post: 'Java Backend Developer',
    aos: 'fade-up-right',
  },
  {
    name: 'Ajar',
    avatar: Ajar,
    post: 'Проектный менеджер',
    aos: 'fade-up',
  },
  {
    name: 'Aman',
    avatar: Aman,
    post: 'Frontend Developer',
    aos: 'fade-up-left',
  },
]

const Employees = () => (
  <div className="container employees-con">
    <h3 className="section-title">Наша команда</h3>
    <div className="employees-cards">
      {employees.map(employee => (
        <div data-aos-duration="600" data-aos={employee.aos} key={employee.name} className="employee-card">
          <div className="lin-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
              <circle cx="17" cy="17" r="17" fill="black" />
              <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#27AE60" />
              <path
                d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z"
                fill="#27AE60"
              />
              <path
                d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z"
                fill="#27AE60"
              />
            </svg>
          </div>
          <div className="employee-card-img">
            <img src={employee.avatar} alt={employee.name} />
          </div>
          <div className="employee-card-description">
            <p>{employee.name}</p>
            <p>{employee.post}</p>
          </div>
          <div className="bottom-line" />
        </div>
      ))}
    </div>
  </div>
)

export default Employees
