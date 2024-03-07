export default function ProgressBar({
  numerate,
  denominator,
}: {
  numerate: number;
  denominator: number;
}) {
  const widthFraction = `w-${numerate}/${denominator}`;

  return (
    <div className="w-full h-max py-5">
      <div className="w-full h-0.5 bg-grey-100">
        <div className={`${widthFraction} h-0.5 bg-primary-black`} />
      </div>
    </div>
  );
}
