import React from 'react'
import {useState, useEffect} from 'react';

import {Outlet,  useNavigate } from 'react-router-dom'


//style
import "./ParentPg.css"

//navBar
import NavbAdmin from "../../components/Navbar/AdminNavbar"


const ParentPG = () => {
   

    // All -- firstime controll aff
        return (
            <>
                <div className='adminParent'>
                    <div className="navParent"> 
                        <NavbAdmin/>
                    </div>
                    {/* <div className="contentParent">
                        <Outlet />
                    </div> */}
                    <div className="contentParent">
                        <Outlet />
                    </div>
                </div>
            </>
        )
}

export default ParentPG