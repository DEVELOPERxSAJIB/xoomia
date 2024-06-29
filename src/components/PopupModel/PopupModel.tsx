import React from "react";

const PopupModel = ({children,className}:{children:ReactElement}) => {
  return <div className={`bg-slate-600 bg-opacity-20 absolute ${className}`}>{children}</div>;
};

export default PopupModel;
