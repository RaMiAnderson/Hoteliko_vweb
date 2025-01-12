import React from 'react'
import getUser from "../../../services/getUserFonction"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

// style 
import "./adminRavitaillement.css"

import TopNavSansDt from "../../../components/miniTopBar/TopBarSansDate"


export default function adminRavitaillement() {
  const navigate = useNavigate();

  // Verify if already Connected
  const [token, setToken] = useState(sessionStorage.getItem("user"));
  if(token !== null){
      const [userDataSRC, setUserDataSRC] = useState(getUser.getDataUser(token));
      const d = userDataSRC.then(async (data) => await setUserData((data)))
      const [userData, setUserData] = useState();
      
      useEffect(() => {
          if(userData != undefined){
              if(userData.fonction !== "Admin")
                  navigate("/")
          }
      })
  }
  else
    useEffect(() => {navigate("/")})
 

  // All -- firstime controll aff
  if(token !== null)
    return (
      <>
        <div className='adminDashBoardParent'>
          <div className="contentParent">
            {/* TopBar */}
            <div className='rav_tpBrC'>
              <TopNavSansDt titlePg={"Se Ravitailler"}/>
            </div>
          </div>
        </div>
      </>
    )
}
