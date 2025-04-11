import HeroImg from "./HeroImg";

const Hero = async () => {

  return (
    <section className="block py-8 xl:pb-12 bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between gap-x-12">
          {/* title */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <h1 className="h1 mb-4">Crypto Compass</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              {/* Crypto Compass simplifies cryptocurrency exploration, featuring
              rankings, exchange data, and news updates for easy market
              insights. */}
              Crypto Compass simplifies cryptocurrency exploration, featuring rankings and news updates for easy market insights.
            </p>
          </div>
          {/* image */}
          <HeroImg />
        </div>
      </div>
    </section>
  );
};
export default Hero;
