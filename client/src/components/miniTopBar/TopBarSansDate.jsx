import React from 'react'
import BasicButton from '../BasicButton/BasicButtons';
import AddIcon from '@mui/icons-material/Add';
// import SettingIcon
import MoreBtn from "../SettingTopBar/More"


import "./miniTopBar.css"

export default function TopBarStatPG({titlePg}) {
  return (
    <div className='mnTpBr_Parent'>
        <h3 className='titlePgStyle'>{titlePg}</h3> 
        <div className='mnTpBr_rightPrt'>
            <div className='BtnNewTick'>
            <BasicButton 
              variant={"contained"}
              color={"var(--white)"}
              bgColor={"#f87269"} 
              bgColorH={"#eb6258"} 
              bgColorA={"#E42417"} 
              brdrColor={"#f87269"}
              brdrColorH={"#eb6258"}
              textBtn={"Nouveau Ticket"} 
              width={200} 
              padding={"16px 12px 16px 3px"} 
              StartIcon={<AddIcon/>}>

            </BasicButton>
            </div>
            <div className='More'>
              <MoreBtn/>
            </div>
        </div>
    </div>
  )
}