import React, { Children, cloneElement } from "react";

export default (props) => {
  return (
    <div>
      {Children.map(props.children, (child, i) => {
        return cloneElement(child, { ...props });
      })}
    </div>
  );
};
