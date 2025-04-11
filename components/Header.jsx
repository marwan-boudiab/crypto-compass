import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className={`py-3 px-4 sticky z-40 top-0 darK:border-secondary bg-background`}
    >
      <div className="mx-auto">
        <div className="flex items-center gap-x-1">
          {/* mobile nav */}
          <div className="md:hidden">
            <MobileNav />
          </div>
          {/* logo */}
          <Logo />
          {/* nav */}
          <Navbar
            containerStyles="hidden md:flex gap-x-4 mx-auto justify-center items-center bg-muted py-2 px-2 rounded-full"
            linkStyles="relative hover:text-primary transition-all"
            markStyles="hover:rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
