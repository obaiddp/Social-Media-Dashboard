import React, { useState } from 'react'
import Header from './components/Header'
import rawdata from './data.json'
import FollowerCard from './components/FollowerCard'
import OverviewCard from './components/OverviewCard'

const App = () => {
  const [data, setData] = useState(rawdata);

  const followersData = data.platforms;
  const overviewToday = data.overviewToday;

  const colorGradients = [
      {
        color1: '#168FF6',
        color2: '#168FF6'
      },
      {
        color1: '#1DA1F2',
        color2: '#1DA1F2'
      },
      {
        color1: '#FBB86A',
        color2: '#E55990'
      },
      {
        color1: '#B30B2F',
        color2: '#B30B2F'
      }
  ]

  return (
    <div className='
        bg-[#FFFFFF]
        dark:bg-[#1D2029]
        grid 
        px-4       // mobile: small side padding
        sm:px-8    // ≥640px
        md:px-12   // ≥768px
        lg:px-20   // ≥1024px
        xl:px-40   // ≥1280px
        2xl:px-60  // ≥1536px
        py-10 sm:py-14 md:py-20
      '>

      {/* section 1 */}
      <Header totalFollowers={data.totalFollowers}/>

      {/* section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-17">
        {
          followersData.map((item, index) => (
            <FollowerCard platform={item.platform} username={item.username} followers={item.followers} changeToday={item.changeToday} gradient={colorGradients[index]}/>
          ))
        }
      </div>
      

      {/* section 3 */}
      <h2
        className='
          text-4xl 
          dark:text-white 
          text-[#65687C]
          font-bold
          mb-8
        '
        >Overview Today</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {
          overviewToday.map(item => (
            <OverviewCard metric={item.metric} platform={item.platform} value={item.value} change={item.change}/>
          ))
        }
      </div>

    </div>
  )
}

export default App


