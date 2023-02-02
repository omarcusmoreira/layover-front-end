import { AccountActions } from "./components/AccountActions";
import { Footer } from "./components/Footer";
import { HowItWorks } from "./components/HowItWorks";
import { SearchFlight } from "./components/SearchFlight";
import { Status } from "./components/Status";
import { Testimonial } from "./components/Testimonial";
import { WhatWeAre } from "./components/WhatWeAre";
import {
  Content,
} from "./styles";

export function Home() {
  return (
    <>
      <AccountActions />
      <Content>
        <WhatWeAre />
        <HowItWorks />
        <SearchFlight />
        <Status />
        <Testimonial />
      </Content>
      <Footer />

    </>
  );
}
