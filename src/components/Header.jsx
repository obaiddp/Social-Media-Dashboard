import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Switch } from '@headlessui/react'

const Header = ({ totalFollowers }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [enabled, setEnabled] = useState(false)

  return (
    <div className='
          flex flex-row
          justify-between
          
          text-[#24242E]
          bg-transparent

          dark:text-white

          py-2
          mb-10
          '>

      <div className="bg-red">
        <h1
          className='
                text-4xl font-bold
                mb-2
              '
        >Social Media Dashboard</h1>

        <p
          className=' text-[#767885]
                      font-bold
                    '   
          >Total Followers: {totalFollowers}</p>
      </div>

      <div className="flex mt-4">
        {isDark ? 
            <p
              className='
                  font-bold
                  text-[#FFFFFF]        
                '
              >Dark Mode</p> 
            : 
            <p
              className='
                font-bold
                text-[#82879A]
              '
              >White Mode</p> 
            }

        <Switch
          checked={isDark}
          onChange={toggleTheme}
          className="group inline-flex h-6 w-11 items-center rounded-full ml-3 bg-gradient-to-r from-[#399CD5] to-[#46BE98]"
        >
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
        </Switch>
      </div>

    </div>
  )
}

export default Header
