import React from 'react'
import { Link } from 'react-router-dom'

const Unknown = () => {
  return (
    <div className=' container w-full h-[80vh] flex flex-col justify-center items-center '>
          <p className='text-[35px] text-center md:text-[60px]   font-bold '>FIGMADA BU PAGE YO'Q </p>
          <Link  to={"/"} className=' underline text-[24px] font-bold text-[--pri] '>Go to Home </Link>
    </div>
  )
}

export default Unknown