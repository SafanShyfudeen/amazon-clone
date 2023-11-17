import amazon_image from '../image/amazon_image.png'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import {Link} from "react-router-dom"
import Great_Festival_image from '../image/Greate-Festival-image.jpg'
import { useStateValue } from './UserContext';
import { auth } from './firebase';


function Header() {
    const [{basket, user}, dispatch] =useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

  return (
// LOGO
<div>
    <div className='header'>
       <Link to="/">
        <img src={amazon_image} className='header-logo' alt='amazonlogo'/></Link>
        

{/* SEARCH */}
    <div className='header-search'>
        <input type='text' className='header-searchInput'/>
        <SearchIcon className="header-searchIcon"/>
        </div>
    <div className='header-nav'>
        <div  className='header-option'>
            <span className='header-optionLineOne'>Hello {!user ? "Guest" : user.email} </span>
            
    
          <span className='header-optionLineTwo'> {user ?<div onClick={handleAuthentication}> Sign Out</div>
          :<Link to ="/login" style={{color:'white', textDecoration:'none'}}> Sign In</Link>} </span>
          

        </div>

        <div className='header-option'>
            <span className='header-optionLineOne'>Return</span>
           <Link to='/order'> <span className='header-optionLineTwo'>&Orders</span></Link>
        </div>

        <div className='header-option'>
            <span className='header-optionLineOne'>Your</span>
            <span className='header-optionLineTwo'>Prime</span>
        </div>

        <Link to="/checkout" className='header-optionBasket
        header-optionLineTwo'>
        
            <ShoppingBasket/>
            <span className='header-basketCount'>{basket?.length}</span>
        
        </Link>
    </div>
    </div>
    <div className='secondHeaders' >
    <Link to="/todayDeals"><button className='secondHeaderOption'>Today's Deals</button></Link> 
    <Link to="/mobileSection"> <button className='secondHeaderOption'>Mobiles</button></Link>
    <Link to="/electronics"> <button className='secondHeaderOption'>Electronics</button></Link>
     </div>
     <img src={Great_Festival_image} className='secondHeaderOptionImage '/>
    </div>
  )
}

export default Header