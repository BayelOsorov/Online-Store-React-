import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import Navbar from './components/Navbar'
import AdminContextProvider from './context/AdminContext';
import AddPage from './pages/AddPage';
import MainPage from './pages/MainPage';
import EditPage from './pages/EditPage';
import DetailPage from './pages/DetailPage';
import ClientContextProvider from './context/ClientContext';
import AllUserProducts from './components/User/AllUserProducts';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import PaymentPage from './pages/PaymentPage';
import TransactionSuccess from './pages/TransactionSuccess';
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AuthContextProvider from './context/AuthContext';
import CommentContextProvider from './context/CommentContext';
import RatingContextProvider from './context/RatingContext';
import LikesContextProvider from './context/LikesContext';
import PurchaseContextProvider from './context/PurchaseContext';
import PurchaseHistory from './pages/PurchaseHistory';
import BrowsingContextProvider from './context/BrowsingContext';

const MyRoutes = () => {
    return (
        <BrowsingContextProvider>
            <PurchaseContextProvider>
                <LikesContextProvider>
                    <RatingContextProvider>
                        <CommentContextProvider>
                            <AuthContextProvider>
                                <AdminContextProvider>
                                    <ClientContextProvider>
                                        <BrowserRouter>
                                            <Navbar />
                                            <Routes>

                                                <Route path='/' element={<MainPage />} />
                                                <Route path='/admin' element={<AdminPage />} />
                                                <Route path='/admin/add' element={<AddPage />} />
                                                <Route path='/admin/edit/:id' element={<EditPage />} />
                                                <Route path='/products' element={<AllUserProducts />} />
                                                <Route path='/product/:id' element={<DetailPage />} />
                                                <Route path='/cart' element={<CartPage />} />
                                                <Route path="/order" element={<OrderPage />} />
                                                <Route path="/pay" element={<PaymentPage />} />
                                                <Route path="/transactionsuccess" element={<TransactionSuccess />} />
                                                <Route path="/register" element={<RegisterPage />} />
                                                <Route path="/login" element={<LoginPage />} />
                                                <Route path="/forgot" element={<ForgotPasswordPage />} />
                                                <Route path="/purchaseHistory" element={<PurchaseHistory />} />

                                            </Routes>
                                        </BrowserRouter>
                                    </ClientContextProvider>
                                </AdminContextProvider>
                            </AuthContextProvider>
                        </CommentContextProvider>
                    </RatingContextProvider>
                </LikesContextProvider>
            </PurchaseContextProvider>
        </BrowsingContextProvider>
    );
};

export default MyRoutes;