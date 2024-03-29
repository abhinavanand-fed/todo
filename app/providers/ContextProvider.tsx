"use client";

import React from "react";
import GlobalStyleProvider from "./GlobalStyleProdvider";

interface Props {
  children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  return <GlobalStyleProvider>{children}</GlobalStyleProvider>;
}

export default ContextProvider;
