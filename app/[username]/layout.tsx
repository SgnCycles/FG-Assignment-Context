"use client";
import NavMenu from "@/components/NavMenu";
import "../globals.css";
import { useUserContext } from "@/context/userContext";
import { userContextType } from "@/types/types";
import MobileMenu from "@/components/MobileMenu";

export default function UserPageLayout({ children }: LayoutProps<`/[username]`>) {
  const { user } = useUserContext() as userContextType;
  return (
    <>
      {user && <NavMenu />}
      {user && <MobileMenu />}
      {children}
    </>
  );
}