import './App.css';
import CheckOutPage from './CheckOutPage';
import Home from './Components/Home';
import MobileSection from './Components/MobileSection';
import TodayDeals from './Components/TodayDeals';
import LoginSignUpPage from './LoginSignUpPage';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom"
import Electronics from './Components/Electronics';
import Earphone from './Components/Earphone';
import SmartWatch from './Components/SmartWatch';
import ComputerAccessories from './Components/ComputerAccessories';
import Speaker from './Components/Speaker';
import WifiRouters from './Components/WifiRouters';
import Laptop from './Components/Laptop';
import Tv from './Components/Tv';
import WashingMachine from './Components/WashingMachine';
import SuitcaseTrolleys from './Components/SuitcaseTrolleys';
import RenewedProducts from './Components/RenewedProducts';
import InternationalBrand from './Components/InternationalBrand';
import Payment from './Components/Payment';
import React, { useEffect, useState } from 'react';
import { auth } from './Components/firebase';
import { useStateValue } from './Components/UserContext';
import Orders from './Components/Orders';







function App() {
  const [{}, dispatch] = useStateValue();
 
  

  useEffect(() => {
    // will only run once when the app component loads..
    auth.onAuthStateChanged(authuser => {
      console.log('the user iss >>> ',authuser);

      if (authuser){
        // the user just logged in / the user was logged in

        dispatch({
          type: 'Set_User',
          user: authuser
        })
      }
      else {
        // the user is logged out
        dispatch({
          type: 'Set_User',
          user:null
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className='app'>
    
     
        <Routes>
          <Route path='/' element={<Home/>  } ></Route>
          <Route path='/checkout' element={ <CheckOutPage/> }></Route>
          <Route path='/login' element={ <LoginSignUpPage/> } ></Route>
          <Route path='/mobileSection' element={ <MobileSection/> }></Route>
          <Route path='/todayDeals' element={ <TodayDeals/> }></Route>
          <Route path='/electronics' element={ <Electronics/> }></Route>
          <Route path='/earPhones' element={ <Earphone/> } ></Route>
          <Route path='/smartWatch' element={ <SmartWatch/> }></Route>
          <Route path='/computerAccessories' element={ <ComputerAccessories/> }></Route>
          <Route path='/speaker' element={ <Speaker/> } ></Route>
          <Route path='/wifiRouters' element={ <WifiRouters/> }></Route>
          <Route path='/laptop' element={ <Laptop/> }></Route>
          <Route path='/tv' element={ <Tv/> } ></Route>
          <Route path='/washingMachine' element={ <WashingMachine/> }></Route>
          <Route path='/suitcase' element={ <SuitcaseTrolleys/> }></Route>
          <Route path='/renewed' element={ <RenewedProducts/> }></Route>
          <Route path='/international' element={ <InternationalBrand/> }></Route>
          <Route path='/payment' element= { <Payment/> }></Route>
          <Route path='/order' element={ <Orders/> }></Route>
         

          
        </Routes>
     
      
        
    </div>
    </Router>
   
  );
}

export default App;
