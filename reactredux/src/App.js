import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;