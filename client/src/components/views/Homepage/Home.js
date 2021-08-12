import MainSection from '../../MainSection/MainSection'
import {usagesObject} from './HomepageData';

function Home() {
    return (
        <>
          <MainSection {... usagesObject} />
        </>
    )
}

export default Home
