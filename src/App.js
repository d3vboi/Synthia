import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Chat from "./routes/Chat"
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </>
  );
}

export default App;
