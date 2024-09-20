import React from "react";
import { Switch, useSwitch } from "@nextui-org/react";
import { useTheme } from "../../app/ThemeProvider/ThemeProvider";
import { color } from "framer-motion";

export const CustomSwitch = ({ isSelected, onChange }) => {
  const [selected, setSelected] = React.useState(false);
  const { isDark } = useTheme();

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

  return (
    <Component  onClick={handleClick}>
      {/* Wrapper pour la track (espace autour du thumb) */}
      <div
        {...getWrapperProps()}
        style={{ overflow: 'hidden' }}
        className={slots.wrapper({
            class:[
              'z-30',
              isDark ? 'bg-primary' : 'bg-secondary',
             
              

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
