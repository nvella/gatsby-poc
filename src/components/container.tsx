import React from "react";

interface ContainerProps {
  children: React.ReactChildren;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div>{children}</div>
);

export default Container;
