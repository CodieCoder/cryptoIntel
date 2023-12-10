import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/header/";
import Homepage from "./pages/Homepage";
import Footer from "./components/footer";
import Coinpage from "./pages/Coinpage";
import "./App.scss";
import RegistrationPage from "./pages/Registration";
import PagesProvider from "./Provider";
import UserIndex from "./pages/User";
import { QueryClient, QueryClientProvider } from "react-query";
import Notify from "./components/Notification/notify";
import CoinsPage from "./pages/Coins";
import NewsPage from "./pages/News/AllNews";
import LoginModal from "./components/Modals/LoginModal";
import FullNews from "./pages/News/FullNews";
import ContactPage from "pages/Contact";
import AboutPage from "pages/about";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PagesProvider>
        <BrowserRouter>
          <div className='boilerplate'>
            <Header />
            <div className='page'>
              <br />
              <br />
              <LoginModal />
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/coins' element={<CoinsPage />} />
                <Route path='/news'>
                  <Route path='' element={<NewsPage />} />
                  <Route path=':newsId' element={<FullNews />} />
                </Route>
                <Route path='/coin/:coinId' element={<Coinpage />} />
                <Route path='/register/' element={<RegistrationPage />} />
                <Route path='/user/' element={<UserIndex />}>
                  <Route path='/user/:subpages' element={<UserIndex />} />
                </Route>
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/about' element={<AboutPage />} />
              </Routes>
            </div>
            <div className='boilerplate_footer'>
              <Notify />
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </PagesProvider>
    </QueryClientProvider>
  );
}

export default App;
