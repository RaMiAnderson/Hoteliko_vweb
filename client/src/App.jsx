import React, { useEffect }  from 'react'

// Page 
import LoginUser from "./pages/Login/LoginUser.jsx"
import AdminnDashboard from "./pages/admin/DashBoard/adminDashboard.jsx"
import AdminArticles from "./pages/admin/Articles/adminArticles.jsx"
import AdminClientP from "./pages/admin/ClientP/adminClientP.jsx"
import AdminDepense from "./pages/admin/Depenses/adminDepense.jsx"
import AdminFournsseur from "./pages/admin/Fournisseur/adminFourniss.jsx"
import AdminInventory from "./pages/admin/Inventaire/adminIventory.jsx"
import AdminRavitaill from "./pages/admin/Ravitaillement/adminRavitaillement.jsx"
import AdminU_Manage from "./pages/admin/Utilisateurs/adminUserManage.jsx"

// Style
import './App.css'
import { BrowserRouter, Routes ,Route, Navigate} from 'react-router-dom'

/*
const LoginPage = () => {
  return <LoginUser/>
}

const AdminDashboard = () => {
  return <AdminnDashboard/>
}

const AdminArtclPg = () => {
  return <AdminArticles/>
}

const AdminClntPg = () => {
  return <AdminClientP/>
}

const AdminDepensePg = () => {
  return <AdminDepense/>
}

const AdminFournssPg = () => {
  return <AdminFournsseur/>
}

const AdminInvtryPg = () => {
  return <AdminInventory/>
}

const AdminRavtaillPg = () => {
  return <AdminRavitaill/>
}

const AdminU_M_Pg = () => {
  return <AdminU_Manage/>
}


export default {
  LoginPage,
  AdminDashboard,
  AdminArtclPg,
  AdminClntPg,
  AdminDepensePg,
  AdminFournssPg,
  AdminInvtryPg,
  AdminRavtaillPg,
  AdminU_M_Pg
}

*/

 const App = ()=>{
  useEffect(() => {
    const mode = localStorage.getItem("mode"); // Récupérer la valeur de mode dans localStorage
    // console.log("Mode dans localStorage :", mode);
    
    if (mode === 'true') {
        document.body.classList.add("dark");
        document.body.classList.remove("ligth");
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("ligth");
    }
}, []);
  return (
    <>
      <BrowserRouter>
          <Routes>
                <Route path='/' element={<Navigate to={"/auth/login"} replace/>}/>
                <Route path='/auth/login' element={<LoginUser/>} />
                <Route path='/auth' element={<Navigate to={"/auth/login"} replace/>}/>
                <Route path='/admin' element={<Navigate to={"/admin/dashboard"}/>}/>
                <Route path='/admin/dashboard' element={<AdminnDashboard/>} />
                <Route path='/admin/articles' element={<AdminArticles/>} />
                <Route path='/admin/fournisseurs' element={<AdminFournsseur/>} />
                <Route path='/admin/clients' element={<AdminClientP/>} />
                <Route path='/admin/inventaires' element={<AdminInventory/>} />
                <Route path='/admin/ravitaillements' element={<AdminRavitaill/>} />
                <Route path='/admin/depenses' element={<AdminDepense/>} />
                <Route path='/admin/utilisateurs' element={<AdminU_Manage/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default App