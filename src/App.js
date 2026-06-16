import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
