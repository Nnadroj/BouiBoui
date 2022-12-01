import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page3";
import Page3 from "./Pages/Page3";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/*  */}
    </div>
  );
}

export default App;
