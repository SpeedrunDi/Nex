import React, { useEffect } from 'react'
import Promo from '../../components/Promo/Promo'
import Statics from '../../components/Statics/Statics'
import ActualDev from './ActualDev/ActualDev'
import OurCourses from '../../components/OurCourses/OurCourses'
import OurClients from './OurClients/OurClients'
import Employees from '../../components/Employees/Employees'

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Promo title="Улучшить бизнес с NEX" subtitle="Software компания" />
      <Statics />
      <ActualDev />
      <OurCourses projects />
      <OurClients />
      <Employees />
    </>
  )
}

export default Main
