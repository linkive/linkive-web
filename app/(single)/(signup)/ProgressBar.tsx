import cn from "classnames";

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
        <div
          style={{ width: `${(numerate / denominator) * 100}%` }}
          className="w-1/4 h-0.5 bg-primary-black"
        />
      </div>
    </div>
  );
}
