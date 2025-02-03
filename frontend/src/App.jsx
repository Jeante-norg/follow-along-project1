import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ProductEntryPage from "./Pages/ProductEntryPage";
import UpdateForm from "./Pages/UpdateForm";
import Navbar from "./components/navbar/Navbar";
import SinglePageProduct from "./Pages/SingleProductPage";
import CartPage from "./Pages/CartPage";
import ProfilePage from "./Pages/Profile";
import AddressCard from "./component/AddressComp/AddressCard";
import SelectAddressPage from "./Pages/SelectAddresspage";
import OrderConfirmation from "./Pages/OrderConfirmationPage";

function App() {
  return (
    <>
      {/* <AddressCard /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-entry-page" element={<ProductEntryPage />} />
        <Route path="/update-form/:id" element={<UpdateForm />} />
        <Route path="/product-details/:id" element={<SinglePageProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/add-address" element={<AddressCard />} />
        <Route path="/select-address" element={<SelectAddressPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </>
  );
}

export default App;
