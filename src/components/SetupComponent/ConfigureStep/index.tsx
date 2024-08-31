import { useState } from "react";
import { Pricing_Data } from "../../../DummyData/constant";
import InputFieldComponent from "./InputFieldComponent";
import { PricingCardComponent } from "./PricingCardComponent";

interface FormData {
  port: number;
  command: string;
  arguments: string;
  envVars: string;
}

export function ConfigureStep() {
  const [selectedPrice, setSelectedPrice] = useState<string | null>("Micro");

  const [formData, setFormData] = useState<FormData>({
    port: 8088,
    command: "My-deployment",
    arguments: "My-deployment",
    envVars: "ENV_NAME=ENV_VALUE",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    console.log(field, value);
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleDeploy = () => {
    const { port, command, arguments: args, envVars } = formData;
    if (!port || !command || !args || !envVars || !selectedPrice) {
      alert("Please fill all input fields and select a pricing option.");
    } else {
      alert("Successfully deploy!");
    }
  };

  return (
    <div className="border border-asBorderGray p-8 rounded-lg font-Inter">
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold text-2xl">
          Configure Deployment (optional)
        </h4>
        <p className="font-normal text-sm text-asWhite">
          Please follow the steps to configure your Project and deploy it.
        </p>
      </div>
      <div className="flex flex-col mt-6 gap-8">
        <InputFieldComponent
          fieldName="Port"
          fieldValue={formData.port}
          fieldType="number"
          onChange={(value) => handleInputChange("port", value)}
        />
        <InputFieldComponent
          fieldName="Command"
          fieldValue={formData.command}
          onChange={(value) => handleInputChange("command", value)}
        />
        <InputFieldComponent
          fieldName="Arguments"
          fieldValue={formData.arguments}
          onChange={(value) => handleInputChange("arguments", value)}
        />
        <InputFieldComponent
          fieldName="Environment Variables"
          fieldValue={formData.envVars}
          onChange={(value) => handleInputChange("envVars", value)}
        />
        <div className="flex flex-col gap-2">
          <p className="font-Inter text-sm font-normal text-asLightGray">
            Pricing Configuration
          </p>
          <div className="w-full grid grid-cols-3 gap-4">
            {Pricing_Data?.map((priceItem, index) => {
              return (
                <PricingCardComponent
                  key={index}
                  priceName={priceItem.priceName}
                  cpuUnits={priceItem.cpuUnits}
                  ramUnits={priceItem.ramUnit}
                  price={priceItem.price}
                  isSelected={selectedPrice === priceItem.priceName}
                  onSelect={() => setSelectedPrice(priceItem.priceName)}
                />
              );
            })}
          </div>
        </div>

        <div className="p-[1px] bg-gradient-to-r from-[#1A73E8] via-[#853BCE] to-[#C471ED] rounded-md">
          <button
            className="w-full z-10 bg-asBlack rounded-md py-3"
            onClick={handleDeploy}
          >
            Deploy
          </button>
        </div>
      </div>
    </div>
  );
}
