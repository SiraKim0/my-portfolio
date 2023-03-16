import React, { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
