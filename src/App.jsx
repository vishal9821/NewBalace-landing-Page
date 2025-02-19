import Hero from "./sections/hero";
import PopularProduct from "./sections/popularProduct";
import SuperQuality from "./sections/superQuality";
import Services from "./sections/services";
import Special from "./sections/spacial";
import Customerreviews from "./sections/customerrevies";
import Subscribe from "./sections/subscibe";
import Footer from "./sections/footer";
import Nav from "./components/Nav"

const APP = () => (

  <main className="relative">
     <nav><Nav /></nav>
     <section className="padding"><Hero /></section>
     <section className="padding"> <PopularProduct /></section>
     <section className="padding"><SuperQuality /></section>
     <section className="padding-x py-10"><Services /></section>
     <section className="padding"><Special /></section>
     <section className="bg-pale-blue padding"><Customerreviews /></section>
     <section className="padding-x sm:py-32 py-16 w-full"><Subscribe /></section>
     <section className="bg-black padding-x padding-t pb-8"><Footer /></section>
  </main>
);


export default APP;