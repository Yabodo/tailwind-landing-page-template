export const metadata = {
  title: "Home - Kestlikkus.ee",
  description: "Page description",
};
import Features from "@/components/features";
import EnvironmentBlocks from "@/components/environment-blocks";
import SocialBlocks from "@/components/social-blocks";
import GovernanceBlocks from "@/components/governance-blocks";

export default function Home() {
  return (
    <>
      <Features />
      <EnvironmentBlocks />
      <SocialBlocks />
      <GovernanceBlocks />
    </>
  );
}
