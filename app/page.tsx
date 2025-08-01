import React from "react";
import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(3);
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            {...companion}
            key={companion.id}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title={"Recent sessions"}
          companions={recentSessionsCompanions}
          className={"w-2/3 max-lg:w-full"}
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
