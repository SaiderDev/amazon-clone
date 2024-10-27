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



function App() {
  return (
    <>
      <Header/>

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
              <Login/>
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
