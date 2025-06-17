import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route>
          <Route path="/admin-login" element={<PharmaAdminLogin />} />

          <Route
            path="/pharma-admin"
            element={
              <ProtectedRoute>
                <PharmaAdmin />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<PharmaDashboard />} />
            <Route path="category" element={<PharmaCategory />} />
            <Route path="subCategory" element={<PharmaSubCategory />} />
            <Route path="orders" element={<PharmaOrder />} />
            <Route path="products" element={<PharmaProducts />} />
            <Route path="addNewProduct" element={<AddNewProduct />} />
            <Route path="addNewProduct/:id" element={<AddNewProduct />} />
            <Route path="banner" element={<PharmaBanner />} />
            <Route path="user" element={<PharmaUser />} />
            <Route path="settings" element={<PharmaSetting />} />
            <Route path="chart" element={<MyChart />} />
            <Route path="wholesale" element={<PharmaWholeSale />} />
            <Route path="prescriptions" element={<PharmaPrescription />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
