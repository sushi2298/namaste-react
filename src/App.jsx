import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router'
import About from './components/About';
import ErrorElement from './components/ErrorElement';
import ContactUs from './components/ContactUs';
import RestaurantDetails from './components/RestaurantDetails';

const AppLayout = () => (
    <div>
        <Header />
        <Outlet />
        {/* <Footer /> */}
    </div>
)

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AppLayout />} >
                <Route path='/' element={<Body />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='*' element={<ErrorElement />} />
                <Route path='/restaurants/:id' element={<RestaurantDetails />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);