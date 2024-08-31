import { Navigation } from "./components/Navigation/index.js";
import { SetupComponent } from "./components/SetupComponent/index.js";
import { WelcomeHeader } from "./components/WelcomeHeader/index.js";

function App() {
  return (
    <div className="flex md:max-w-7xl max-h-screen max-w-full md:mx-auto mx-0 bg-asBlack text-white min-h-screen h-full overflow-hidden">
      <Navigation />
      <div className="w-full">
        <WelcomeHeader userName="Jagrati" />
        <div
          className="h-[calc(100vh-80px)] overflow-auto "
          style={{
            /* Hide scrollbar for Chrome, Safari, and Opera */
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE and Edge */,
          }}
        >
          <SetupComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
