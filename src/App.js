import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addproduct from './component/Backend/Addproduct/Addproduct';
import Login from './component/Backend/Login/Login';
import ProductList from './component/Backend/ProductList/ProductList';
import Signup from './component/Backend/Signup/Signup';
import Aboutus from './component/Page/Aboutus/Aboutus';
import Blog from './component/Page/Blog/Blog';
import Contact from './component/Page/Contact/Contact';
import Home from './component/Page/Home/Home';
import AllProducts from './component/Page/Products/AllProducts';
import ProductDetails from './component/Page/Products/ProductDetails';
import Footer from './shear/Footer/Footer';
import Header from './shear/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<AllProducts></AllProducts>}></Route>
        <Route path='/products/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/about-us' element={<Aboutus></Aboutus>}></Route>
        <Route path='/contact-us' element={<Contact></Contact>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/addproducts' element={<Addproduct></Addproduct>}></Route>
        <Route path='/productlist' element={<ProductList></ProductList>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
