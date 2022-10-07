import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar.js';
import Products from './Pages/Products.js';
import Resources from './Pages/Resources.js';
import Bar from './Pages/bar.js';
import Test from './Pages/Mapping-Test.js';
import { UserData } from './Components/UserData';

function App() {
  let path;
  UserData.map ((item) =>{
    if (item.name === "Dan")
    {
      path = <Navbar />;
    }
    else
    {
      path = <Test />;
    };
  })
  return (
    <BrowserRouter>
    {path}
    <Switch>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;