import React, { useState } from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import Herosection from "./components/herosection";
import Heroslider from "./components/heroslider";
import Marqueeslider from "./components/marqueeslider";
import HowWeAre from "./components/how-we-are";
import Portfolio from "./components/portfolio";
import ReadyToPost from "./components/ready-to-post";
import Packages from "./components/packages";
import ContactUs from "./components/contact-us";
import FaqsSection from "./components/faqs-section";
import Loader from "./components/loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <main>
        <Header />
        <div className="">
          <div>
            <Herosection />
            <Heroslider />
            <Marqueeslider />
            <HowWeAre />
            <div>
              <Portfolio />
              <ReadyToPost />
            </div>
            <Packages />
          </div>
        </div>
        <ContactUs />
        <FaqsSection />
        <Footer />
      </main>
    </>
  );
};

export default App;
