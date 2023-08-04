import React from 'react'
import './News.css'

import post1 from '../../../assets/java.jpg'
import post2 from '../../../assets/discount.jpg'

const news = [
  {
    date: '1 Август, 2023',
    title: 'Объявляем набор',
    description: 'Мы рады сообщить, что у нас открыт набор на курсы Java backend разработка!!!',
    img: post1,
  },
  {
    date: '1 Август, 2023',
    title: 'Скидки!',
    description: 'У нас также действуют скидки на обучение',
    img: post2,
  },
]

const News = () => (
  <div className="news">
    <h3 className="section-title">Последние новости</h3>
    <div className="container news-con">
      <div className="news-cards">
        {news.map(post => (
          <div
            data-aos="flip-left"
            data-aos-duration="700"
            data-aos-anchor-placement="top-center"
            key={post.title}
            className="post-card"
          >
            <img src={post.img} alt={post.title} />
            <div className="post-card-description">
              <p className="post-date">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7.8051 6.36006V3.80005C7.8051 3.24005 8.2451 2.80005 8.8051 2.80005C9.3651 2.80005 9.8051 3.24005 9.8051 3.80005V6.36006C9.8051 6.92006 9.3651 7.36006 8.8051 7.36006C8.2451 7.36006 7.8051 6.92006 7.8051 6.36006ZM15.2051 7.36006C15.7651 7.36006 16.2051 6.92006 16.2051 6.36006V3.80005C16.2051 3.24005 15.7651 2.80005 15.2051 2.80005C14.6451 2.80005 14.2051 3.24005 14.2051 3.80005V6.36006C14.2051 6.92006 14.6451 7.36006 15.2051 7.36006ZM8.4451 10.8H15.5451C15.9851 10.8 16.3451 10.44 16.3451 10C16.3451 9.56005 15.9851 9.20005 15.5451 9.20005H8.4451C8.0051 9.20005 7.6451 9.56005 7.6451 10C7.6451 10.44 8.0051 10.8 8.4451 10.8ZM19.6051 4.20005H17.9451C17.5051 4.20005 17.1451 4.56005 17.1451 5.00005C17.1451 5.44005 17.5051 5.80005 17.9451 5.80005H18.8051V19.4H5.2051V5.80005H6.0651C6.5051 5.80005 6.8651 5.44005 6.8651 5.00005C6.8651 4.56005 6.5051 4.20005 6.0651 4.20005H4.4051C3.9651 4.20005 3.6051 4.64003 3.6051 5.08003V20.2C3.6051 20.64 3.9651 21 4.4051 21H19.6051C20.0451 21 20.4051 20.64 20.4051 20.2V5.08003C20.4051 4.64003 20.0451 4.20005 19.6051 4.20005ZM11.3451 5.80005H12.6651C13.1051 5.80005 13.4651 5.44005 13.4651 5.00005C13.4651 4.56005 13.1051 4.20005 12.6651 4.20005H11.3451C10.9051 4.20005 10.5451 4.56005 10.5451 5.00005C10.5451 5.44005 10.9051 5.80005 11.3451 5.80005ZM8.4451 14.4H15.5451C15.9851 14.4 16.3451 14.04 16.3451 13.6C16.3451 13.16 15.9851 12.8 15.5451 12.8H8.4451C8.0051 12.8 7.6451 13.16 7.6451 13.6C7.6451 14.04 8.0051 14.4 8.4451 14.4Z"
                    fill="white"
                  />
                </svg>
                {post.date}
              </p>
              <p className="post-title">{post.title}</p>
              <p className="post-description">{post.description}</p>
              {/* <p className="post-button"> */}
              {/*  Прочитать далее{' '} */}
              {/*  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> */}
              {/*    <path */}
              {/*      d="M3.75 12H20.25" */}
              {/*      stroke="white" */}
              {/*      strokeWidth="1.5" */}
              {/*      strokeLinecap="round" */}
              {/*      strokeLinejoin="round" */}
              {/*    /> */}
              {/*    <path */}
              {/*      d="M13.5 5.25L20.25 12L13.5 18.75" */}
              {/*      stroke="white" */}
              {/*      strokeWidth="1.5" */}
              {/*      strokeLinecap="round" */}
              {/*      strokeLinejoin="round" */}
              {/*    /> */}
              {/*  </svg> */}
              {/* </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default News
