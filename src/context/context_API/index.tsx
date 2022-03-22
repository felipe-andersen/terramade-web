import * as React from "react";


let obj:obj = {
  name: 'felipe'
};

interface obj {
  name: string
};

interface ContextAPIProtocol {
  context: obj
  setContext: React.Dispatch<React.SetStateAction<obj>>;
};

const Context = React.createContext({} as ContextAPIProtocol);

export function ContextAPI(Children?: React.ReactChildren) {

  const [context, setContext] = React.useState(obj);

  return (
    <Context.Provider value={{context, setContext}}>
      {Children}
    </Context.Provider>
  )
};

export const useContextAPI = () => {
  const context = React.useContext(Context);
  

  return context
}







