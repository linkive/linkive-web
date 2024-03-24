import BottomNavBar from "@/components/BottomNavBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <BottomNavBar />
    </>
  );
}
