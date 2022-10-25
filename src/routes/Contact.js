import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assests/contactus2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-contact"
        heroImg={AboutImg}
        title="Contact us..."
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
