// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import PharmaAdminLogin from './pharma-admin/component/PharmaAdminLogin'
// import ProtectedRoute from './pharma-admin/component/ProtectedRoute'
// import PharmaAdmin from './pharma-admin/component/PharmaAdmin'
// import PharmaBanner from './pharma-admin/page/PharmaBanner'
// import PharmaDashboard from './pharma-admin/page/PharmaDashboard'
// import PharmaCategory from './pharma-admin/page/PharmaCategory'
// import PharmaSubCategory from './pharma-admin/page/PharmaSubCategory'
// import PharmaOrder from './pharma-admin/page/PharmaOrder'
// import PharmaProducts from './pharma-admin/page/PharmaProducts'
// import AddNewProduct from './pharma-admin/page/AddNewProduct'
// import PharmaUser from './pharma-admin/page/PharmaUser'
// import PharmaSetting from './pharma-admin/page/PharmaSetting'
// import PharmaWholeSale from './pharma-admin/page/PharmaWholeSale'
// import PharmaPrescription from './pharma-admin/page/PharmaPrescription'
// import { ThemeSelector, useTheme } from './ThemeContext'
// import { useEffect } from 'react';
// import Navbar from './Website/component/Navbar'
// import Landing from './Website/page/landing'
// import Trial from './Website/component/Trial'
// import Cards from './Website/component/Cards'


// function App() {
//   useEffect(() => {
//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
//     mediaQuery.addListener(handleChange);
//     return () => mediaQuery.removeListener(handleChange);
//   }, []);



//   return (
//     <div >
//       <ThemeSelector />
//       {/* <h1>current theme : {theme}</h1> */}
//       <Routes>
//         <Route path='/' element={<Landing />} />
//         <Route path='nav' element={<Navbar />} />
//         <Route path='trial' element={<Trial />} />
//         <Route path='cards' element={<Cards />} />

//         <Route>
//           {/* <Route path="/admin-login" element={<PharmaAdminLogin />} /> */}

//           {/* <Route
//             path="/pharma-admin"
//             element={
//               <ProtectedRoute>
//                 <PharmaAdmin />
//               </ProtectedRoute>
//             }
//           >
//             <Route path="dashboard" element={<PharmaDashboard />} />
//             <Route path="category" element={<PharmaCategory />} />
//             <Route path="subCategory" element={<PharmaSubCategory />} />
//             <Route path="orders" element={<PharmaOrder />} />
//             <Route path="products" element={<PharmaProducts />} />
//             <Route path="addNewProduct" element={<AddNewProduct />} />
//             <Route path="addNewProduct/:id" element={<AddNewProduct />} />
//             <Route path="banner" element={<PharmaBanner />} />
//             <Route path="user" element={<PharmaUser />} />
//             <Route path="settings" element={<PharmaSetting />} />
//             <Route path="wholesale" element={<PharmaWholeSale />} />
//             <Route path="prescriptions" element={<PharmaPrescription />} />
//           </Route> */}
//         </Route>
//       </Routes>
//     </div>
//   )
// }

// export default App



import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Landing from './Website/page/landing';
import Products from './Website/component/Products';
import SingleProduct from './Website/component/SingleProduct';
import Cart from './Website/component/Cart';
import Checkout from './Website/component/Checkout';
import Wishlist from './Website/component/Wishlist';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/products' element={<Products />} />
        {/* <Route path='/single_product' element={<SingleProduct />} /> */}
        <Route path='/products/single_product' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;


