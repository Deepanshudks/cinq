import { createFileRoute } from "@tanstack/react-router";
import { CinqExperience } from "@/components/cinq/CinqExperience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CINQ | Luxury Residences at Financial District" },
      {
        name: "description",
        content:
          "Discover CINQ at Financial District — premium residences by Raghava featuring majestic towers, curated amenities, The Oasis, Sky Level and luxury clubhouse spaces.",
      },
      { property: "og:title", content: "CINQ | Luxury Residences at Financial District" },
      {
        property: "og:description",
        content:
          "Discover CINQ at Financial District — premium residences by Raghava with private tower experiences, The Oasis, Sky Level and clubhouse spaces.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <CinqExperience />;
}
