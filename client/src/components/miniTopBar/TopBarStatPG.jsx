import React from 'react'
import BasicButton from '../BasicButton/BasicButtons';
import AddIcon from '@mui/icons-material/Add';

import DateTest from "../inputDate/DatePicker"

import "./miniTopBar.css"

export default function TopBarStatPG({titlePg}) {
  return (
    <div className='mnTpBr_Parent'>
        <h2 className='titlePgStyle'>{titlePg}</h2>
        <div className='mnTpBr_rightPrt'>
            <div className='BtnNewTick'>
            <BasicButton bgColor={"#f87269"} bgColorH={"#eb6258"} bgColorA={"#E42417"} textBtn={"Nouveau Ticket"} width={200} padding={"16px 12px 16px 3px"} StartIcon={<AddIcon/>}></BasicButton>
            </div>
            <div className='DateTest'>
                <DateTest label={"Date début"}/>
            </div>
            <div className='DateTest'>
                <DateTest label={"Date fin"}/>
            </div>
        </div>
    </div>
  )
}
