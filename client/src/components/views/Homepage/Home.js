import React from 'react'
import MainSection from '../../MainSection/MainSection'
import {usagesObject, patronsObject, recCenterObject} from './HomepageData';

function Home() {
    return (
        <>
          <MainSection {... usagesObject} />
          <MainSection {... patronsObject} />
          <MainSection {... recCenterObject} />    
        </>
    )
}

export default Home
