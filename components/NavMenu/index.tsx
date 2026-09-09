import { NavMenuItems } from "@/data/navMenu";
import Link from "next/link";

const NavMenu = () => {
  
  return (
    <nav className="flex justify-around py-4 font-work-sans font-bold text-xl tracking-widest text-primary">
      {NavMenuItems &&
        NavMenuItems.map((item, index) => (
          <Link href={item.href} key={index} className="hover:text-secondary">
            {item.item}
          </Link>
        ))}
    </nav>
  );
};

export default NavMenu;