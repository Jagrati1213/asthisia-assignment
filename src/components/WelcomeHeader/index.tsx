import ExclamationImg from "../../assets/exclimination.png";

interface WelcomeProps {
  userName: string;
}
export function WelcomeHeader({ userName }: WelcomeProps) {
  return (
    <div className="w-full flex justify-between items-center border-b border-asBorderGray px-8 py-4 h-20">
      <div>
        <h1 className="text-3xl font-medium font-Inter">Welcome, {userName}</h1>
      </div>

      <div className="flex justify-between items-center gap-4 font-medium">
        <div className="flex gap-2 justify-evenly items-center bg-asLightGreen rounded-lg px-4 py-2 w-40 cursor-default">
          <div className="activePoint w-2 h-2 rounded-full bg-asGreen"></div>
          <p className="text-sm mx-0 px-0">
            Credits: <span className="text-asGreen">5 USD</span>
          </p>

          <div>
            <img src={ExclamationImg} className="object-contain w-full" />
          </div>
        </div>
        <button className="rounded-md px-4 py-2 hover:bg-white hover:text-black transition-all">
          Docs
        </button>
      </div>
    </div>
  );
}
