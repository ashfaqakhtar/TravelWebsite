import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/Services.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-service"
        heroImg={AboutImg}
        title="Our Services..."
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
