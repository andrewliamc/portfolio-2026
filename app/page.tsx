import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import About from "@/components/About";
import SocialLinks from "@/components/SocialLinks";

const graphPaperStyle = {
  backgroundImage: `
    linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)
  `,
  backgroundSize: "20px 20px",
};

export default function Home() {
  return (
    <div
      className="min-h-screen bg-[var(--bg)]"
      style={graphPaperStyle}
    >
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <About />
        <SocialLinks />
      </main>
    </div>
  );
}
