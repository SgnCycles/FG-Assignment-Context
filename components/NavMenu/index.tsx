import { NavMenuItems } from "@/data/navMenu";
import Link from "next/link";

const NavMenu = () => {
  return(
    <nav>
      {NavMenuItems && NavMenuItems.map((item, index) => 
      <Link href={item.href} key={index}>{item.item}</Link>)}
    </nav>
  )
}

export default NavMenu;