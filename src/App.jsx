import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route key="home" path="/" element={<Home className="page-transition" />} />
        <Route key="blogs" path="blogs" element={<News className="page-transition" />} />
        <Route key="contact" path="contact" element={<Contact className="page-transition" />} />
        <Route key="noPage" path="*" element={<NoPage className="page-transition" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
