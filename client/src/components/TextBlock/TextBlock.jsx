import React from 'react'
import './TextBlockStyle.css'

const TextBlock = ({label, color}) => {
  return (
    <>
        <div className='TxtBParent'> 
            <p className={'label ' + color}>{label}</p>
            <input className={"TxtBlockInp " + color} type="text" name="" id="" readOnly value="30 000 000 000"/>
        </div>
    </>
  )
}

export default TextBlock