import React, { useEffect } from 'react'
import Promo from '../../components/Promo/Promo'
import OurCourses from '../../components/OurCourses/OurCourses'
import Statics from '../../components/Statics/Statics'
import Advantages from './Advantages/Advantages'
import Employees from '../../components/Employees/Employees'
import News from './News/News'

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Promo title="Войди в IT вместе с Nex-gen EXcellence" subtitle="Курсы IT в Бишкеке" />
      <Statics />
      <OurCourses />
      <Advantages />
      <Employees />
      <News />
    </>
  )
}

export default Courses
