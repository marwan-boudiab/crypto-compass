import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa6";
import Nav from "@/components/Navbar";

const MobileNav = () => {
  return (
    <Sheet variants="left">
      <SheetTrigger asChild>
        <div className="hover:bg-muted p-2 rounded-full">
          <FaBars className="size-5 cursor-pointer" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <Nav
          containerStyles="flex mt-[1rem] flex-col gap-y-4"
          linkStyles="text-2xl"
          side
        />
        {/* <p className="absolute ms-2 bottom-6 text-muted-foreground">
          created by marwan bou diab
        </p> */}
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
