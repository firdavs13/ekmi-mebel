import Header from "@components/header/Header";
import Hero from "@components/hero/Hero";
import Product from '@components/product/Product'
import Mebel from "@components/mebel/Mebel";
import Story from "@components/story/Story";
import Publications from "@components/publications/Publications";
import Contact from "@components/contact/Contact";
import Numbers from "@components/nubers/Numbers";
import Partners from "@components/partners/Partners";
import Brands from "@components/brands/Brands";
import Footer from "@components/footer/Footer";

function App() {
  return <div className="App">
    <Header/>
    <Hero/>
    <Product/>
    <Mebel/>
    <Story/>
    <Publications/>
    <Contact/>
    <Numbers/>
    <Partners/>
    <Brands/>
    <Footer/>
  </div>;
}

export default App;
