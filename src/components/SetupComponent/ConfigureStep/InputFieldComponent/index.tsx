import { useState } from "react";

interface InputFieldProps {
  fieldName: string;
  fieldValue: string;
  fieldType?: string;
}

export default function InputFieldComponent({
  fieldName,
  fieldValue,
  fieldType = "text",
}: InputFieldProps) {
  const [inputValue, setInputValue] = useState(fieldValue);

  return (
    <div className="flex flex-col gap-2">
      <label className="font-Inter text-sm font-normal text-asLightGray">
        {fieldName}
      </label>
      {fieldName === "Environment Variables" ? (
        <textarea
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="text-white bg-transparent border border-asInputBorderGray p-3 rounded-md active:border-asBorderGray resize-none"
          rows={4}
          draggable={false}
        />
      ) : (
        <input
          type={fieldType}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="text-white bg-transparent border border-asInputBorderGray p-3 rounded-md active:border-asBorderGray no-arrows"
        />
      )}
    </div>
  );
}
