import "./App.css";
import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import OrderConfirmed from "./components/OrderConfirmed";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import New from "./components/New";
import Featured from "./components/Featured";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from './components/Profile';

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback="Loading...">
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="order-summary" element={<OrderConfirmed />} />
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="profile" element={<Profile/>}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
