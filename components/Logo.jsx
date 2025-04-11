import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-x-2">
      {/* image */}
      <Image src="/logo.svg" width={32} height={32} priority alt='Crypto Compass Logo' />
      {/* title */}
      <h1 className="font-bold">CRYPTO COMPASS</h1>
    </Link>
  );
};
export default Logo;
