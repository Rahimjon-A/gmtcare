import React from 'react'

const Title = ({text}) => {
  return (
    <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[--second] ">
      { text }
      
  </p>
  )
}

export default Title