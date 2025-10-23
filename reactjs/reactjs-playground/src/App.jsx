import Header from "./Header";
import Hero from "./Hero";
import TrustedBrands from "./TrustedBrands";
import Services from "./Services";
import Footer from "./Footer";

function App(){

  const trustedBrands = [
    {
      id: 1,
      logo:"St."
    },
    {
      id:2,
      logo: "Ryzer"
    },
    {
      id: 3,
      logo: "Google"
    }
  ]
  
  return(
    <>
      <Header />
      <Hero />
      <TrustedBrands trustedBrands={trustedBrands}/>
      <Services />
      <Footer />
    </>
  )
}

export default App;