import { createContext } from "react";
export const Context = createContext();

export const Provider = (props) => {
  <Context.Provider value={props.store}>{props.children}</Context.Provider>;
};
