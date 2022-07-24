import { useState } from "react";
import { createContext } from "react";
import { User } from "../../models/User";

export const Context = createContext(null);

export function Provider(props) {
  const [state, setState] = useState(null);

  const setUser = (userFormData) => {
    setState(new User({ displayName: userFormData.displayName }));
  };
  const logOutUser = () => {
    setState(null);

    console.log(state);
  };

  const value = {
    joined: state !== null,
    setUser,
    user: state,
    logOutUser,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
