interface PricingCardProps {
  priceName: string;
  cpuUnits: number;
  ramUnits: number;
  price: number;
  isSelected: boolean;
  onSelect: () => void;
}

export function PricingCardComponent({
  priceName,
  cpuUnits,
  ramUnits,
  price,
  isSelected,
  onSelect,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col gap-2 px-6 py-4 font-Inter border rounded-md cursor-pointer
     ${isSelected ? "border-asBlue" : "border-asBorderGray"}`}
      onClick={onSelect}
    >
      <div
        className={`py-1 px-2 w-fit rounded-md text-xs border ${
          priceName === "Micro"
            ? "border-asLightRed  bg-asRed text-asOrange"
            : priceName === "Small"
            ? "bg-asLightPurple  border-asPurple text-asPurple"
            : "bg-asLightBlue  border-asBlue text-asBlue"
        }`}
      >
        {priceName}
      </div>
      <p className="font-normal text-sm text-asPriceText">{cpuUnits} vCPU</p>
      <p className="font-normal text-sm text-asPriceText">{ramUnits} GB RAM</p>
      <p className="text-sm font-semibold">
        <span className="text-asGreen">${price}</span> /hours
      </p>
    </div>
  );
}
