import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import InfoPage from './pages/InfoPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<InfoPage title='About Veltra' text='Veltra is an online store built with React and the FakeStore API.' />} />
                <Route path="/contact" element={<InfoPage title='Contact Us' text='This contact page is a placeholder for the final store project.' />} />
                <Route path="/account" element={<InfoPage title='Account' text='Account features can be added later by the team.' />} />
                <Route path="/settings" element={<InfoPage title='Settings' text='Settings features can be added later by the team.' />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
