"use client";
import NavMenu from "@/components/NavMenu";
import "../globals.css";
import { useUserContext } from "@/context/userContext";
import { userContextType } from "@/types/types";

export default function UserPageLayout({ children }: LayoutProps<`/[username]`>) {
  const { user } = useUserContext() as userContextType;
  return (
    <>
      {user && <NavMenu />}
      {children}
    </>
  );
}