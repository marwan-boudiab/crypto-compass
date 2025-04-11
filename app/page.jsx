import Hero from "@/components/Hero";
import TopCryptos from "@/components/TopCryptos";

const page = () => {
  return (
    <main className="container">
      <Hero />
      <TopCryptos simplified />
    </main>
  );
};
export default page;
