import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NotableCases from "./components/NotableCases";
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notableCases" element={<NotableCases />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
