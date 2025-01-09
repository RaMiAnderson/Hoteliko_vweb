import React, { useEffect }  from 'react'

// Page 
import LoginUser from "./pages/Login/LoginUser.jsx"
import AdminnParent from "./pages/admin/ParentPG.jsx"
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
          <Route path="/" element={<Navigate to={"/auth/login"} replace />} />
          <Route path="/auth/login" element={<LoginUser />} />
          <Route
            path="/auth"
            element={<Navigate to={"/auth/login"} replace />}
          />
          {/*<Route path="/admin" element={<Navigate to={"/admin/dashboard"} />} /> */}

          <Route path="/admin" element={<AdminnParent />}>
            <Route path="dashboard" element={<AdminnDashboard />} />
            <Route path="articles" element={<AdminArticles />} />
            <Route path="fournisseurs" element={<AdminFournsseur />} />
            <Route path="clients" element={<AdminClientP />} />
            <Route path="inventaires" element={<AdminInventory />} />
            <Route path="ravitaillements" element={<AdminRavitaill />} />
            <Route path="depenses" element={<AdminDepense />} />
            <Route path="utilisateurs" element={<AdminU_Manage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App