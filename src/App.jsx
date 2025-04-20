import React, { lazy, Suspense } from 'react';
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

// lazy loading
// Dynamic import
// Dynamic Bundling
// Chunking
// On demand loading
// Code splitting

const Grocery = lazy(() => import('./components/GroceryStore'))

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AppLayout />} >
                <Route path='/' element={<Body />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='*' element={<ErrorElement />} />
                <Route path='/restaurants/:id' element={<RestaurantDetails />} />
                <Route path='/grocery' element={<Suspense fallback={<h1>Loading groceries....</h1>}><Grocery /></Suspense>} />
            </Route>
        </Routes>
    </BrowserRouter>
)}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);