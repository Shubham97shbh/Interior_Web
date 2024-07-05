import './App.css';
import { Footer } from './component/footer/Footer';
import { Navbar } from './component/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from './component/Container';
import { Product } from './component/premium_wall/Product';
import { Login } from './component/user/Login';
import { Register } from './component/user/Register';
import { SingleProduct } from './component/premium_wall/SingleProduct';
import { HomeDecorProduct } from './component/homedecor/HomeDecorProduct';
import { HomeDecorSingleProduct } from './component/homedecor/HomeDecorSingleProduct';

function App() {
  return (
    <div>
      {/* <Navbar/>
      <MainContainer/>
      <PremiumWallPaper/>
      <ExclusiveCollection/>
     <HomeDecor/>
     <CustomizedWall/>

     <WallpaperRoom/>
     <CustomerReview/>
     <LovedWallpare/>
     <Footer/> */}
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='' element={<Container/>}/>
      <Route path="premiumwallpaper" element={<Product/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="singleproduct" element={<SingleProduct/>}/>
      <Route path="home-decor-product" element={<HomeDecorProduct/>}/>
      <Route path="home-decor-product-buy" element={<HomeDecorSingleProduct/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>

    </div>
  );
}

export default App;
