interface PropsTypes {
  iconImg: string;
  isHover?: boolean;
}

export function NavIcon({ iconImg, isHover = true }: PropsTypes) {
  return (
    <div
      className={`h-10 overflow-hidden flex items-center justify-center ${
        isHover ? "hover:bg-white rounded  transition-all cursor-pointer" : null
      } `}
    >
      <div>
        <img src={iconImg} className="object-contain w-full p-3" />
      </div>
    </div>
  );
}
