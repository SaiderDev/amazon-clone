import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import Home from './Components/Home'
import Products from './Components/Products'
import Header from './Components/layout/Header'


function App() {
  return (
    <div>
      <Header/>

        <main>
            <Route path='/home'>
              <Home />
            </Route>

            <Route path="/products">
              <Products/>
            </Route>
            
        </main>

    </div>
  );
}

export default App;
