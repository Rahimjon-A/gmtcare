export const BtnG = ({title}) => {
  return (
    <button className="text-[12px] bg-[--pri] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
      {title}
    </button>
  )
}
export const BtnW = ({title}) => {
  return (
    <button className="text-[12px]   py-2 lg:py-[11px] px-[20px] lg:px-[30px] border border-[--border] text-[--second] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
      {title}
    </button>
  )
}
export const BtnWG = ({title}) => {
  return (    
    <button className="text-[12px]   py-2 lg:py-[11px] px-[20px] lg:px-[30px] border border-[--border] text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
      {title}
    </button>
  )
}
export const BtnGG = ({title}) => {
  return (
    <button className="text-[12px]   py-2 lg:py-[11px] px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] hover:text-white text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
      {title}
    </button>
  )
}


 