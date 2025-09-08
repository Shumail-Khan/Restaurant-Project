import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/Sidebar/SideBar';
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add/Add';
import List from './Pages/List/List';
import Order from './Pages/Orders/Order';


const App = () => {
  return (
    <div className='h-0'>
      <NavBar/>
      <hr />
      <div  className="flex">
        <SideBar/>
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App