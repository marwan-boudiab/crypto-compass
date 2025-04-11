// import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-muted py-4 mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          {/* <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-tertiary dark:text-white text-[20px] hover:text-white dark:hover:text-primary transition-all"
          /> */}
          {/* copyright */}
          <div className="text-muted-foreground text-xs sm:text-sm">
            Created By Marwan Bou Diab
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
