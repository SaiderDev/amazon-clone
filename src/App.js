import logo from './logo.svg';
import './App.css';
import {Redirect, Route,Switch} from 'react-router-dom'
import Home from './Components/Home'
import Products from './Components/Products'
import Header from './Components/layout/Header'
import ProductDetails from './Components/ProductDetails';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import Orders from './Components/Orders';
import { useEffect, useState,useContext } from 'react';
import AuthContext from './Context/authContext';
import { auth } from './Firebase';
import ShoppingContext from './Context/Shopping/shoppingContext';



function App() {
  const shoppingContext = useContext(ShoppingContext)
  const {setUser} = shoppingContext


  // const [isLoggedIn,setIsLoggedIn] = useState(false)

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("isLoggedIn")

  //   if(userInfo === '1'){
  //     setIsLoggedIn(true)
  //   }
  // },[])
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is: ",authUser)

      if(authUser){
        setUser(authUser)
      }
      else{
        setUser(null)
      }
    })
     },[])

  // const loginHandler = (email,password) => {
  //   localStorage.setItem("isLoggedIn","1")
  //   setIsLoggedIn(true)

  // }

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn")
  //   setIsLoggedIn(false)
  // }

  return (
    <>
      <Header />

        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to='/home'/>
            </Route>            
            <Route path='/home'>
              <Home />
            </Route>

            <Route path="/products" exact>
              <Products/>
            </Route>

            <Route path="/products/:id">
              <ProductDetails/>
            </Route>

            <Route path="/login">
              <Login  />
            </Route>

            <Route path="/order">
              <Orders/>
            </Route>

            <Route path="*">
              <NotFound/>
            </Route>

          </Switch>

        </main>

    </>
  );
}

export default App;
