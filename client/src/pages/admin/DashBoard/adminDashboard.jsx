import React from 'react'
import getUser from "../../../services/getUserFonction"
import { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom'

//style
import "./DashboardStyle.css"

//miniTopBar
import MiniTopBar from "../../../components/miniTopBar/TopBarStatPG"

export default function adminDashboard() {
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
                    <div className="DashcontentParent">
                        {/* TopBar */}
                        <div className='adDsh_tpBrC'>
                            <MiniTopBar titlePg={"Récapitulatif des ventes"}/>
                        </div>
                        <div className='Dashcontent'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </>
        )




}