import React from 'react'

import "./cardMoneyStyle.css"


const CardMoney = ({color, label, montant, stats}) => {
  return (
    <>
      <div className='cardMoneyParent'>
        <div className='leftColor' style={{backgroundColor:color}}></div>
        <div className='rightContent'>
          <div style={{display:"flex"}}>
              <p className='label'>{label}</p>
              <p className='miniStat' style={{color: "var(--GreenThem)"}}>{stats}</p>
          </div>
          <p className='montant'>Ar {montant}</p>
        </div>
      </div>
    </>
  )
}

export default CardMoney