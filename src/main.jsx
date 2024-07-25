import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import ProductCreationPage from "./pages/ProductCreationPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import UserListedProductsPage from "./pages/UserListedProductsPage.jsx";
import SingleProductPage from "./pages/SingleProductPage.jsx";
import CategoryProducts from "./pages/CategoryProducts.jsx";
import ChatPage from "./pages/ChatPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<PrivateRoutes />}>
        <Route index path="/createproduct" element={<ProductCreationPage />} />
        <Route index path="/products" element={<ProductsPage />} />
        <Route path="/:userId/products" element={<UserListedProductsPage />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
        <Route path="/categories/:category" element={<CategoryProducts />} />
        <Route path="/chats" element={<ChatPage />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
