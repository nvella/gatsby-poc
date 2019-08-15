import React from "react";
import Navigation from "./navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Navigation />
    {children}
  </div>
);

export default Layout;
