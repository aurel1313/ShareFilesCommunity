import React from "react";
import { Switch, useSwitch } from "@nextui-org/react";

export const CustomSwitch = ({ isSelected, onChange }) => {
  const [selected, setSelected] = React.useState(false);
  const {
    Component,
    slots,

    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({ isSelected });
  const handleClick = (e) => {
    onChange(selected);
  };
console.log(isSelected)
  return (
    <Component {...getBaseProps()} onClick={handleClick}>
      {/* Wrapper pour la track (espace autour du thumb) */}
      <div
        {...getWrapperProps()}
        style={{ overflow: 'hidden' }}
        className={slots.wrapper({
            class:[
                isSelected ? "bg-blue-400" : "bg-red-400",
                "rounded-full",
                "h-6",
                "w-12",
                "flex",
                "items-center",
                "cursor-pointer",
                "transition",
                "duration-200",
                "ease-in-out",
                "relative",
            ]
        })}
      >
        <div
          style={{
            position: "absolute",
            top: "3px",
            left: isSelected ? "20px" : "5px",
            transition: "left 0.2s",
            backgroundColor: "white",
            height: "16px",
            width: "16px",
            borderRadius: "50%",
          }}
     
        />
      </div>
    </Component>
  );
};
