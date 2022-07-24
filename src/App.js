import Home from "./components/Home"
import { Routes, Route, Link } from "react-router-dom"
import Search from "./components/Search"
// import "./App.css"

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </>
)

export default App