import { FaArrowLeft } from "react-icons/fa";
import { GitRepoComponent } from "./GitRepoComponent";
import { DeployStepsComponent } from "./DeployStepsComponent";
import { useState } from "react";
import { ConfigureStep } from "./ConfigureStep";

export function SetupComponent() {
  const allSetupSteps = ["Configure Github", "Configure Deployment", "Go Live"];
  const [activeStep, setActiveStep] = useState<number>(2);

  return (
    <section className="flex gap-3 p-10 flex-col">
      <div className="w-full flex gap-3 items-center">
        <div>
          <FaArrowLeft />
        </div>
        <div className="font-Inter text-sm">Back</div>
      </div>
      <div className="flex gap-10 mt-5">
        <div className="flex gap-7 flex-col">
          <GitRepoComponent branchName="expressjs-cn8x" />
          <DeployStepsComponent currentStep={activeStep} />
        </div>

        <div className="flex-1">{activeStep === 2 && <ConfigureStep />}</div>
      </div>
    </section>
  );
}
