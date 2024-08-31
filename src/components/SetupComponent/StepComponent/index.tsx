interface StepProps {
  totalSteps: number;
  getStepStatus: (stepNumber: number) => string;
}
export function StepComponent({ totalSteps, getStepStatus }: StepProps) {
  return (
    <ol className="relative text-gray-500 border-s border-asBorderGray dark:border-gray-700 dark:text-gray-400">
      {[...Array(totalSteps)].map((_, index) => {
        const stepNumber = index + 1;
        const status = getStepStatus(stepNumber);

        return (
          <li
            key={stepNumber}
            className={`mb-10 ms-6 flex items-center ${
              status === "completed"
                ? "text-green-500"
                : status === "active"
                ? "text-blue-500"
                : ""
            }`}
          >
            <span
              className={`absolute flex items-center justify-center w-10 h-10 rounded-full -start-5 border ${
                status === "completed"
                  ? "bg-asBlack border-asGreen"
                  : status === "active"
                  ? "bg-asBlack border-asBlue"
                  : "bg-asBlack border-asGray"
              }`}
            >
              {status === "completed" ? (
                <svg
                  className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              ) : (
                <div className="text-white dark:text-gray-400">
                  {stepNumber}
                </div>
              )}
            </span>
            <div className="flex flex-col ml-2 font-Inter gap-1">
              <h3
                className={`font-medium leading-tight text-lg ${
                  status === "active" ? "text-white" : "text-asLightGray"
                }`}
              >
                {stepNumber === 1
                  ? "Configure Github"
                  : stepNumber === 2
                  ? "Configure Deployment"
                  : "Go Live"}
              </h3>
              {stepNumber === 2 && (
                <p className="text-sm text-white">
                  Specify how Exopods will build your site.
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
