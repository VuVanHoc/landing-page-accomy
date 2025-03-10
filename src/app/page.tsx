import DiscoverEvent from "@/components/discoverEvent";
import Footer from "@/components/footer";
import Header from "@/components/header";
import OurServices from "@/components/ourServices";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <DiscoverEvent />
      <OurServices />
      <Footer />
    </div>
  );
}
