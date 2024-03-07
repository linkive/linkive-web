export function BaseTopBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="topBar">
      {children}
      {/* <Back /> */}

      {/* <h1 className="text-primary-black">{title}</h1> */}
      {/* <MagnifyingGlass />  */}
    </div>
  );
}
