import DropDown from "@/public/icon/arrow_down.svg";
export default function HomeSkeleton() {
  return (
    <>
      <div className=" inline-flex py-3 flex-col w-full gap-3">
        <div className="flex w-full px-3 items-center gap-2.5">
          <div className="relative block w-[30px] h-[30px] shrink-0 rounded-full  bg-skeleton-gradient overflow-hidden"></div>
          <div className="flex w-full flex-col gap-1.5 justify-center items-start">
            <div className="w-full h-3 bg-skeleton-gradient animate-pulse" />
            <div className=" w-1/3 h-2.5 bg-skeleton-gradient animate-pulse" />
          </div>
        </div>

        <div
          className="relative block w-full animate-pulse bg-skeleton-gradient"
          style={{ paddingTop: "calc( 56.25% + 2px)" }}
        />

        <button className="flex flex-col items-center w-full gap-2.5 px-3">
          <div className="flex h-4 w-full items-end gap-1">
            <div className="w-16 h-3 bg-skeleton-gradient animate-pulse" />
          </div>

          <div className="flex w-full px-3 py-1.5 justify-start items-center gap-2.5 rounded-lg border border-grey-100">
            {/* <Image src={"/img/item.png"} width={32} height={43} alt="product" /> */}
            <div className="w-[33px] h-[44px] bg-skeleton-gradient animate-pulse" />

            <div className="flex flex-grow flex-col justify-center items-start gap-1.5">
              <div className="w-1/3 h-3 bg-skeleton-gradient animate-pulse" />
              <div className="w-full h-[14px] bg-skeleton-gradient animate-pulse" />
            </div>

            {/* <DropDown /> */}
          </div>
        </button>
      </div>
    </>
  );
}
