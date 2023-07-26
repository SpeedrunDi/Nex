import React, { useEffect, useState } from 'react'
import './OurCourses.css'
import axios from 'axios'

const OurCourses = () => {
  const [courses, setCourses] = useState([
    {
      name: 'Java',
      courseDuration: 6,
      coursePrice: '10000',
      courseStart: '2023-09-05T06:00:00.000+00:00',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="62.667" height="53.333" version="1.0" viewBox="0 0 47 40"><path d="M45.6846 36.6865C45.6846 43.6062 40.0751 49.2157 33.1554 49.2157L14.3615 49.2157C12.4394 49.2157 10.8812 47.6575 10.8812 45.7353L10.8812 22.069C10.8812 18.2247 13.9976 15.1083 17.8419 15.1083L42.2043 15.1083C44.1264 15.1083 45.6846 16.6665 45.6846 18.5886L45.6846 36.6865Z" fill="#E8F5E9"/>
<path d="M1 10v10h5c3.8 0 5 .4 5 1.5s1.2 1.5 5 1.5 5-.4 5-1.5 1.2-1.5 5-1.5h5.1l-.3-9.8-.3-9.7L15.8.2 1-.1V10zm29 0v8H2V2h28v8zM19 21c0 .5-1.3 1-3 1-1.6 0-3-.5-3-1 0-.6 1.4-1 3-1 1.7 0 3 .4 3 1z"/><path d="M4 6c0 .5 2 1 4.5 1S13 6.5 13 6c0-.6-2-1-4.5-1S4 5.4 4 6zM4.5 10c-.4.6 3.3 1 10.5 1s10.9-.4 10.5-1c-.3-.6-5-1-10.5-1s-10.2.4-10.5 1zM4.5 14c-.4.6 1 1 3.4 1 2.3 0 4.1-.5 4.1-1 0-.6-1.5-1-3.4-1s-3.8.4-4.1 1zM16.5 14c-.4.6 1.3 1 4.5 1s4.9-.4 4.5-1c-.3-.6-2.4-1-4.5-1s-4.2.4-4.5 1zM3.6 27.5c-.9 1.3-1.6 2.7-1.6 3 0 .7 26.5.6 27.3-.1.3-.4-.1-1.7-1-3C26.8 25.1 26.2 25 16 25c-10.3 0-10.8.1-12.4 2.5zM27 28c0 .6-4.3 1-11 1s-11-.4-11-1 4.3-1 11-1 11 .4 11 1z"/></svg>`,
    },
    {
      name: 'JavaScript',
      courseDuration: 6,
      coursePrice: '10000',
      courseStart: '2023-09-05T00:00:00.000+00:00',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="61.333" height="54.667" version="1.0" viewBox="0 0 46 41"><path d="M45.6846 36.6865C45.6846 43.6062 40.0751 49.2157 33.1554 49.2157L14.3615 49.2157C12.4394 49.2157 10.8812 47.6575 10.8812 45.7353L10.8812 22.069C10.8812 18.2247 13.9976 15.1083 17.8419 15.1083L42.2043 15.1083C44.1264 15.1083 45.6846 16.6665 45.6846 18.5886L45.6846 36.6865Z" fill="#E8F5E9"/>
<path d="M.6 1.8C.2 2.5 5.9 29 6.7 29.9c.2.3 2.1-1.3 4.3-3.4l4-3.9 3.8 3.7 3.8 3.7 3.4-3.5 3.4-3.5-3.7-3.8-3.7-3.8 4-3.9c2.2-2.1 3.9-4 3.7-4.1C29.4 7.1 3.1 1 2 1c-.5 0-1.1.3-1.4.8zm24.3 6.9c.3.2-.9 1.8-2.7 3.6L19 15.4l3.7 3.8c3.6 3.7 3.6 3.8 1.8 5.8l-1.9 2.1-3.8-3.8-3.8-3.7-3.4 3.3-3.5 3.4-1-3.9C5.7 16.8 3 5 3 4.1c0-.7 20.9 3.6 21.9 4.6z"/></svg>`,
    },
    {
      name: 'Project Management',
      courseDuration: 5,
      coursePrice: '10000',
      courseStart: '2023-09-05T00:00:00.000+00:00',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="50" viewBox="0 0 46 50" fill="none">
<path d="M45.6846 36.6865C45.6846 43.6062 40.0751 49.2157 33.1554 49.2157L14.3615 49.2157C12.4394 49.2157 10.8812 47.6575 10.8812 45.7353L10.8812 22.069C10.8812 18.2247 13.9976 15.1083 17.8419 15.1083L42.2043 15.1083C44.1264 15.1083 45.6846 16.6665 45.6846 18.5886L45.6846 36.6865Z" fill="#E8F5E9"/>
<path d="M24.9545 35.9336H4.42057C3.98543 35.9336 3.63226 36.2912 3.63226 36.7318C3.63226 37.1725 3.98543 37.5301 4.42057 37.5301H24.9545C25.3896 37.5301 25.7428 37.1725 25.7428 36.7318C25.7428 36.2912 25.3896 35.9336 24.9545 35.9336Z" fill="black"/>
<path d="M24.9545 32.6577H4.42057C3.98543 32.6577 3.63226 33.0153 3.63226 33.456C3.63226 33.8966 3.98543 34.2542 4.42057 34.2542H24.9545C25.3896 34.2542 25.7428 33.8966 25.7428 33.456C25.7428 33.0153 25.3896 32.6577 24.9545 32.6577Z" fill="black"/>
<path d="M5.86475 24.3433C8.86033 27.3319 9.0243 30.18 9.0243 30.1991L9.04951 30.9718H20.3633L20.4012 30.2055C20.4012 30.18 20.5651 27.3319 23.5923 24.3113C23.7625 24.1453 23.9454 23.9793 24.1851 23.7685C26.8086 21.1631 28.2527 17.6764 28.2527 13.9598C28.2527 6.67987 22.6084 0.689874 15.52 0.255632V0.230103H13.9055V0.255632C6.81703 0.689874 1.17273 6.67987 1.17273 13.9598C1.17273 17.6764 2.61693 21.1631 5.28457 23.8068C5.48007 23.9729 5.66294 24.1389 5.86475 24.3433ZM14.6938 1.82658H14.7253C21.3093 1.84574 26.6698 7.28653 26.6698 13.9598C26.6698 17.2485 25.3896 20.3265 23.113 22.5935C22.8923 22.7851 22.6842 22.9767 22.4445 23.2066C19.9282 25.7226 19.1525 28.1684 18.9192 29.3754H10.4937C10.2604 28.1684 9.49098 25.7226 6.96838 23.2066L6.92423 23.1619C6.72873 22.9703 6.52063 22.7787 6.34405 22.6318C4.02327 20.3265 2.74304 17.2485 2.74304 13.9598C2.74304 7.29291 8.10354 1.85212 14.6875 1.82658H14.6938Z" fill="black"/>
</svg>`,
    },
  ])

  useEffect(() => {
    const { data } = axios('https://nex-production-4ac3.up.railway.app/course')
  }, [])

  return (
    <div className="container our-courses">
      <h3 className="section-title">Наши курсы</h3>
      <div className="courses">
        {courses?.map(course => (
          <div key={course.name} className="course-card">
            <div className="course-svg-block" dangerouslySetInnerHTML={{ __html: course.icon }} />
            <h5>{course.name}</h5>
            <p className="course-duration">Продолжительность курса: {course.courseDuration} месяцев</p>
            <p>Стоимость: {course.coursePrice}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurCourses
