import React from 'react'
import MainCarousel from '../../component/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../component/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/Men/men_kurta'
import { kurtaPage1 } from '../../../Data/Kurta/kurta'
import {mensPantsPage1} from '../../../Data/pants/men_page1'
import {sareePage1} from '../../../Data/Saree/page1'

const HomePage = () => {
  return (
    <div>
    <MainCarousel/>

    <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
      <HomeSectionCarousel data={mens_kurta} sectionName="Men's Kurta"/>
      <HomeSectionCarousel data={kurtaPage1} sectionName="Women's Kurta"/>
      <HomeSectionCarousel data={mensPantsPage1} sectionName="Men's Pants"/>
      <HomeSectionCarousel data={sareePage1} sectionName="Women's Saree"/>
      
    </div>

    </div>
  )
}

export default HomePage