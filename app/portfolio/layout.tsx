import React from "react";

type LayoutProps = {
	children: React.ReactNode
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section>
      <h1>Portfolio</h1>
      {children}
    </section>
  );
}

export default Layout;
