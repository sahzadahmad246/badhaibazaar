
import React from "react";
import { cn } from "./../../lib/utils"; 

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-lg overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
