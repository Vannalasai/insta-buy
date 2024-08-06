import { useEffect, useState } from 'react'
import { Badge, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css'
import Home from './components/Home'
import Login from './components/Login';
import Signup from './components/Signup';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Logo from './assets/logo.png'

function App() {
  const navigate = useNavigate('');
  const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if(userEmail){
      setUser(userEmail)
    }
  }, [])

  const handleAddToCart = (item) => {
    setCartItems({...cartItems, ...item});
  }

  return (
    <div>
      <Navbar className='instabuy-navbar' style={{padding: "10px 50px"}}>
        <Navbar.Brand onClick={() => navigate("/")} style={{color: "#5471fe"}}>
          <img src={Logo} alt="" width="30" height="30" 
          className='d-inline-block align-top' 
          style={{marginRight: "5px"}}/>
          InstaBuy!</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {user && <Button onClick={()=> navigate('/cart')}>Cart &nbsp; {Object.keys(cartItems).length > 0 && <Badge bg='success'>{Object.keys(cartItems).length}</Badge>}</Button>}
          &nbsp; &nbsp; &nbsp;
          <Button onClick={ () => {navigate('/login')}}>{user ? 'Logout' : 'Login'}</Button>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home user={user}/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/signup' element={<Signup setUser={setUser}/>}/>
        <Route path='/products' element={<ProductGallery/>}/>
        <Route path='/product/:id' element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems}/>}/>
        <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
    
  )
}

export default App
