import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Agreement from './components/auth/Agreement';
import Information from './components/auth/Information';
import Complete from './components/auth/Complete';
import MainPage from './pages/MainPage';
import ClientPage from './pages/ClientPage';
import ProductListPage from './pages/ProductListPage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ScrollTop from './components/common/ScrollTop';
import ProductDetailPage from './pages/ProductDetailPage';
import PurchasePage from './pages/PurchasePage';
import CheckPayment from './components/purchase/CheckPayment';
import Payment from './components/purchase/Payment';
import OrderComplete from './components/purchase/OrderComplete';
import PurchaseInformation from './components/purchase/PurchaseInformation';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ReviewsPage from './pages/ReviewsPage';
import CartPage from './pages/CartPage';
import BrandIntroductionPage from './pages/BrandIntroductionPage';
import HicardiHalterPage from './pages/HicardiHalterPage';
import SearchPage from './pages/SearchPage';
import MonitoringPage from './pages/MonitoringPage';
import Floating from './components/floating/Floating';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />}>
          <Route path="agreement" element={<Agreement />} />
          <Route path="information" element={<Information />} />
          <Route path="complete" element={<Complete />} />
        </Route>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/products/:productId/purchase" element={<PurchasePage />}>
          <Route path="information" element={<PurchaseInformation />} />
          <Route path="checkPayment" element={<CheckPayment />} />
          <Route path="payment" element={<Payment />} />
          <Route path="orderComplete" element={<OrderComplete />} />
        </Route>
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:postId" element={<BlogDetailPage />} />
        <Route path="/support" element={<ClientPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/article/:articleId" element={<NewsDetailPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/brand" element={<BrandIntroductionPage />} />
        <Route path="/halter" element={<HicardiHalterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/monitoring" element={<MonitoringPage />} />
      </Routes>
      <Footer />
      <Floating />
    </BrowserRouter>
  );
};

export default Router;
