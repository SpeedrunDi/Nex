import React from 'react'
import './News.css'

import post1 from '../../../assets/new-1.png'
import post2 from '../../../assets/new-2.png'
import post3 from '../../../assets/new-3.png'

const news = [
  {
    date: '15 Сент, 2021',
    title: 'Искусственный интеллект перешел на новый уровень',
    img: post1,
  },
  {
    date: '15 Сент, 2021',
    title: 'Обновления в мире игр',
    img: post2,
  },
  {
    date: '15 Сент, 2021',
    title: 'Машинное обучение в сфере атомной энергетики',
    img: post3,
  },
]

const News = () => (
  <div className="news">
    <h3 className="section-title">Последние новости</h3>
    <div className="container news-con">
      <div className="news-cards">
        {news.map(post => (
          <div className="post-card">
            <img src={post.img} alt={post.title} />
            {/* <div className="post-card-description"> */}
            {/*  <p>{post.date}</p> */}
            {/*  <p>{post.title}</p> */}
            {/*  <p> */}
            {/*    Прочитать далее{' '} */}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> */}
            {/*      <path */}
            {/*        d="M3.75 12H20.25" */}
            {/*        stroke="white" */}
            {/*        strokeWidth="1.5" */}
            {/*        strokeLinecap="round" */}
            {/*        strokeLinejoin="round" */}
            {/*      /> */}
            {/*      <path */}
            {/*        d="M13.5 5.25L20.25 12L13.5 18.75" */}
            {/*        stroke="white" */}
            {/*        strokeWidth="1.5" */}
            {/*        strokeLinecap="round" */}
            {/*        strokeLinejoin="round" */}
            {/*      /> */}
            {/*    </svg> */}
            {/*  </p> */}
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default News
