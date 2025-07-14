import React from 'react'
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const FollowerCard = ({ platform, username, followers, changeToday, gradient }) => {
  const imgpath = `/images/icon-${platform.toLowerCase()}.svg`

  return (
    // 🔄 [CHANGED] Wrapped everything in a parent div to apply custom gradient "top border"
    <div className="relative flex flex-col w-full rounded-md overflow-hidden">

      {/* 🔄 [ADDED] Gradient top border using inline style */}
      <div
        className="h-[4px] w-full"
        style={{
          background: `linear-gradient(to right, ${gradient.color1}, ${gradient.color2})`
        }}
      />

      {/* 🔄 [CHANGED] Removed border-t-4 and border-t-red-600, moved classes here */}
      <div className='
        flex flex-col
        w-full

        bg-[#F0F3FA]
        hover:bg-[#E1E3F0]

        dark:bg-[#252B43] text-white
        dark:hover:bg-[#333A56]

        rounded-b-md
        items-center
        p-6
      '>
        {/* upper */}
        <div className='flex pb-7'>
          <img
            src={imgpath}
            alt="icon"
            className='w-5 h-5 mr-2'
          />
          <p className='text-sm text-[#767885] dark:text-gray-200'>
            {username}
          </p>
        </div>

        {/* middle */}
        <p className='text-[#24242E] text-6xl dark:text-white font-bold mb-2'>
          {followers}
        </p>

        <p className='text-[#24242E] dark:text-white text-center tracking-[5px] pb-5 mb-2'>
          FOLLOWERS
        </p>

        {/* lower */}
        <div className="flex text-center">
          {changeToday > 0 ? (
            <TiArrowSortedUp className="text-[#40978A] relative top-[3px]" size={18} />
          ) : (
            <TiArrowSortedDown className="text-[#C1536C] relative top-[3px]" size={18} />
          )}
          {changeToday > 0 ? (
            <p className='text-[#40978A] font-bold ml-1'>{Math.abs(changeToday)} Today</p>
          ) : (
            <p className='text-[#C1536C] font-bold'>{Math.abs(changeToday)} Today</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default FollowerCard

/**

-> flex/grid, w-10 h-10
-> color
-> border
-> item-positioning
-> padding
 */
