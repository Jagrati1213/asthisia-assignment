interface DeployStepsProps {
  currentStep: number;
}
export function DeployStepsComponent({ currentStep }: DeployStepsProps) {
  return (
    <div>
      <div className="flex gap-2 flex-col">
        <h3 className="font-Inter text-xl font-medium">You're almost done.</h3>
        <p className="font-Inter font-normal text-sm text-asWhite">
          Please follow the steps to configure your Project and deploy it.
        </p>
      </div>

      <div></div>
    </div>
  );
}
