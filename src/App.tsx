import { Navigation } from "./components/Navigation/index.js";
import { SetupComponent } from "./components/SetupComponent/index.js";
import { WelcomeHeader } from "./components/WelcomeHeader/index.js";

function App() {
  return (
    <div className="flex md:max-w-7xl max-w-full md:mx-auto mx-0 bg-asBlack text-white min-h-screen h-full">
      <Navigation />
      <div className="w-full">
        <WelcomeHeader userName="Jagrati" />
        <SetupComponent />
      </div>
    </div>
  );
}

export default App;
