import { FaArrowLeft } from "react-icons/fa";
import { GitRepoComponent } from "./GitRepoComponent";
import { useState } from "react";
import { ConfigureStep } from "./ConfigureStep";
import { StepComponent } from "./StepComponent";

export function SetupComponent() {
  const allSetupSteps = ["Configure Github", "Configure Deployment", "Go Live"];
  const totalSteps = allSetupSteps.length;
  const [activeStep, setActiveStep] = useState<number>(2);

  // Function to determine step status
  const getStepStatus = (stepNumber: number) => {
    if (stepNumber < activeStep) {
      return "completed";
    } else if (stepNumber === activeStep) {
      return "active";
    } else {
      return "inactive";
    }
  };

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

          <div>
            <div className="flex gap-2 flex-col">
              <h3 className="font-Inter text-xl font-medium">
                You're almost done.
              </h3>
              <p className="font-Inter font-normal text-sm text-asWhite">
                Please follow the steps to configure your Project and deploy it.
              </p>
            </div>

            <div className="px-8 pt-10">
              <StepComponent
                getStepStatus={getStepStatus}
                totalSteps={totalSteps}
              />
            </div>
          </div>
        </div>

        <div className="flex-1">{activeStep === 2 && <ConfigureStep />}</div>
      </div>
    </section>
  );
}
