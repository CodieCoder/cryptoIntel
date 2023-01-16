import React, { useContext, useMemo, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css"
import Header from "./components/header/"
import Homepage from "./pages/Homepage"
import Footer from "./components/footer"
import Coinpage from "./pages/Coinpage"
import "./App.scss"
import RegistrationPage from "./pages/Registration"
import LoginPage from "./pages/Login"
import PagesProvider from "./Provider"
import UserIndex from "./pages/User"
import { QueryClient, QueryClientProvider } from "react-query"
import Notify from "./components/Notification/notify"
import CoinsPage from "./pages/Coins"
import NewsPage from "./pages/News"
import LoginModal from "./components/LoginModal"

const queryClient = new QueryClient()

function App() {
  // const vs_currency = useContext(ContextCurrency);
  // const [currencyContext, setCurrencyContext] = useState<any>("usd");
  // const currencyProvider = useMemo(
  //   () => ({ currencyContext, setCurrencyContext }),
  //   [currencyContext, setCurrencyContext]
  // );
  return (
    <QueryClientProvider client={queryClient}>
      <PagesProvider>
        <BrowserRouter>
          <div className="boilerplate">
            <Header />
            <div className="page">
              <br />
              <br />
              <LoginModal />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/coins" element={<CoinsPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/coin/:coinId" element={<Coinpage />} />
                <Route path="/register/" element={<RegistrationPage />} />
                <Route path="/login/" element={<LoginPage />} />
                <Route path="/user/" element={<UserIndex />}>
                  <Route path="/user/:subpages" element={<UserIndex />} />
                </Route>
              </Routes>
            </div>
            <div className="boilerplate_footer">
              <Notify />
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </PagesProvider>
    </QueryClientProvider>
  )
}

export default App
