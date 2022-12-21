import { createContext, useState } from "react";
import { useEffect } from "react";
export const Context = createContext();

export const Provider = (props) => (
  <Context.Provider value={props.store}>{props.children}</Context.Provider>
);

export function connect(mapStateToProps) {
  return (Component) => {
    const Receiver = ({ store }) => {
      let unmounted = false;
      const [value, setValue] = useState(0);
      useEffect(() => {
        const { subscribe } = store;

        const unsubscribe = subscribe(() => {
          setValue((value) => value + 1);
        });

        return () => {
          unsubscribe();
          unmounted = true;
        };
      }, []);

      const { dispatch, getState } = store;

      const state = getState();

      const stateNeeded = mapStateToProps(state);

      return <Component {...stateNeeded} dispatch={dispatch} />;
    };

    const ConnectedComponent = () => {
      return (
        <Context.Consumer>
          {(store) => <Receiver store={store} />}
        </Context.Consumer>
      );
    };

    return ConnectedComponent;
  };
}
