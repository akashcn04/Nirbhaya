import Navbar from "./components/navbar"
// import Home from "./components/home"
import About from "./components/about"
import WomenIssues from "./components/womenIssues"
import Model from "./components/Model"
import Contact from "./components/contact"
import Footer from "./components/footer"
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
     <Toaster position="top-center" reverseOrder={false} />
    <Navbar />
    <About />
    <WomenIssues />
    <Model />
    <Contact />
    <br />
    <Footer />
    </>
  )
}