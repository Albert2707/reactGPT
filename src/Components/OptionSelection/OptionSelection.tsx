import React from 'react'
import {OptionsModel, Options} from '../../AIOptions/index'

interface Props{
arrayItems: OptionsModel[]
selectOption:(params:Options)=>void
}
const OptionSelection: React.FC<Props> = ({arrayItems, selectOption}) => {

  return (
    <div className="mb-6 md:mb-0">
    <h2 className="text-3xl text-white font-poppins font-semibold text-center">React AI APP</h2>
    <div className="grid grid-cols-1  md:grid-cols-2 text-center gap-4 mt-10">
        {arrayItems.map((item) => ( <div key={item.id} className="border-[1px] border-[whitesmoke] rounded-xl py-6 space-y-5 px-3  hover:bg-[whitesmoke] hover:text-[#212121] text-white transition cursor-pointer duration-300" onClick={() =>selectOption(item.option)}>
        
        <h4 className='text-lg   font-poppins font-bold'>{item.name}</h4>
        <p className="font-poppins text-sm font-medium">{item.description}</p>
        </div> ))}
    </div>
    </div>
  )
}

export default OptionSelection