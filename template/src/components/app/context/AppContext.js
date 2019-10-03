import React, { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  const {
    children
  } = props;

  // Use State to keep the values
  const [isLoading, setLoading] = useState(false);

  // Make the context object:
  const appContext = {
    isLoading,
    setLoading,
  };

  // pass the value in provider and return
  return <Context.Provider value={appContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
