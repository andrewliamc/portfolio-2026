import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

const graphPaperStyle = {
  backgroundImage: `
    linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)
  `,
  backgroundSize: "20px 20px",
};

export default function RootOpsComingSoon() {
  return (
    <div
      className="min-h-screen bg-[var(--bg)]"
      style={graphPaperStyle}
    >
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-24">
        <div className="mx-auto max-w-md text-center">
          <h1 className="font-display text-4xl font-bold text-[var(--primary-text)] md:text-5xl">
            RootOps
          </h1>
          <p className="mt-4 font-sans text-xl font-medium text-[var(--secondary-text)]">
            Coming Soon
          </p>
          <p className="mt-2 font-sans text-base text-[var(--secondary-text)]">
            A workflow and operations platform concept is in the works. Check back later.
          </p>
          <Link
            href="/#work"
            className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--navbar)]"
          >
            <ArrowLeft size={18} />
            Back to work
          </Link>
        </div>
      </main>
    </div>
  );
}
