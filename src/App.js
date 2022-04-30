import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Backend/Login/Login';
import Signup from './component/Backend/Signup/Signup';
import Aboutus from './component/Page/Aboutus/Aboutus';
import Blog from './component/Page/Blog/Blog';
import Contact from './component/Page/Contact/Contact';
import Home from './component/Page/Home/Home';
import Products from './component/Page/Products/Products';
import Footer from './shear/Footer/Footer';
import Header from './shear/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product' element={<Products></Products>}></Route>
        <Route path='/about-us' element={<Aboutus></Aboutus>}></Route>
        <Route path='/contact-us' element={<Contact></Contact>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
