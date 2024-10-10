import React from 'react';
import{Routes , Route ,  BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import GetAllExpense from './components/GetAllExpense';
import DetailExpense from './components/DetailExpense';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import {Toaster} from 'react-hot-toast';
function App() {
    return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element = {<Home/>}></Route>
            <Route path='/expenses' element={<GetAllExpense/>}></Route>
            <Route path='/expenses/:id' element={<DetailExpense/>}></Route>
            <Route path='/expenses/add' element={<AddExpense />} />
            <Route path='/expenses/edit/:id' element={<EditExpense />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div>
        <Toaster/>
      </div>
    </>
    )
    
}

export default App;
