import React from 'react'
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";


const OverviewCard = ({ metric, platform, value, change }) => {
  const imgpath = `/images/icon-${platform.toLowerCase()}.svg`
  
  return (
    <div className='
        flex flex-col
        w-full

        bg-[#F0F3FA]
        hover:bg-[#E1E3F0]

        dark:bg-[#252B43] text-white
        dark:hover:bg-[#333A56]

        rounded-[8px]

        //items-center

        px-6
        py-7
      '
      >
        <div className="flex justify-between mb-10 mt-3">
          <p
            className='
              text-[#656877]
              dark:text-white
              font-bold
            '
          >{metric}</p>
          <img
            src={imgpath}
            alt="icon"
            className='w-5 h-5 mr-2'
          />
        </div>
        
        <div className="flex justify-between">
          <p
            className='
              text-[#24242E]
              dark:text-white
              text-3xl font-bold
              mb-2
              '>
                {value}</p>
          

          <div className="flex mt-3">
              {change > 0 ? (
              <TiArrowSortedUp
                className="text-[#40978A] relative top-[3px]"
                size={18}
              />
            ) : (
              <TiArrowSortedDown
                className="text-[#C1536C] relative top-[3px]"
                size={18}
              />
            )}
            {change > 0 ? <p className='text-[#40978A] font-bold ml-1'>{Math.abs(change)} %</p> : <p className='text-[#C1536C] font-bold'>{Math.abs(change)} %</p>}
          </div>

        </div>
        
    </div>
  )
}

export default OverviewCard