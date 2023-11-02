import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ProductPage from "./components/ProductPage";
import SearchResults from "./components/SearchResults";
import Checkout from "./components/Checkout";


const App = () => {
    return (
        <BrowserRouter>
        <NavBar/>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;