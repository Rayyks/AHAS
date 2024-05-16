import React, { Fragment } from "react";
import Hero from "../../components/landing/Hero";
import Benefits from "../../components/landing/Benefits";
import Steps from "../../components/landing/Steps";
import Testimonials from "../../components/landing/Testimonials";
import FAQ from "../../components/landing/FAQ";

const Home = () => {
  return (
    <Fragment>
      <section>
        <Hero />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <Steps />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <FAQ />
      </section>
    </Fragment>
  );
};

export default Home;
