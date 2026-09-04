import NavMenu from "@/components/NavMenu";
import "../globals.css";

export default function UserPageLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <NavMenu />
      {children}
    </>
  );
}