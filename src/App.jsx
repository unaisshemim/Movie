import "bootstrap/dist/css/bootstrap.min.css";
import './app.scss'
import "bootstrap/dist/js/bootstrap.bundle.min";
import Product from './components/product/Product';
import Products from './pages/product/Products';
import {
   
  Routes,
  Route,
} from "react-router-dom";



window.onload=()=>{
  App()
}


function App() {




  return (
    <div className="app" >
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
    
  

    </div>
  );
}

export default App;
