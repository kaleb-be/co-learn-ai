import React from "react";
import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          topic={"Neural Network of the Brain"}
          name={"Neura the Brainy Explorer"}
          duration={45}
          subject={"science"}
          color={"#ffda6e"}
        />
        <CompanionCard
          id="456"
          name={"Countsy the Number Wizard"}
          topic={"Derivatives & Integrals"}
          duration={45}
          subject={"math"}
          color={"#e5d0ff"}
        />
        <CompanionCard
          id="789"
          name={"Verba the Vocab builder"}
          topic={"language"}
          duration={45}
          subject={"English Literature"}
          color={"#BDE7FF"}
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title={"Recent sessions"}
          companions={recentSessions}
          className={"w-2/3 max-lg:w-full"}
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;