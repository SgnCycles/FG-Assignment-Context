"use client";
import NavMenu from "@/components/NavMenu";
import { useUserContext } from "@/context/userContext";
import { userContextType } from "@/types/types";
import MobileMenu from "@/components/MobileMenu";
import "../globals.css";

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