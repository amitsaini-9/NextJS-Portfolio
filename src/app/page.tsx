import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/Data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
