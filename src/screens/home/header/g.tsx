import * as React from 'react';


interface IAllPropriertiesChildrens {
    children: React.ReactNode;
}

interface IVectorAllProprierties {
  state: IAllProprierties;
  setState: React.Dispatch<React.SetStateAction<IAllProprierties>>;
}

interface IAllProprierties {
  modalDisplay: string;
}

const myProprieties:IAllProprierties = {
  modalDisplay: "none"
}

export const ContextAllPropriertiesHeader = React.createContext<IVectorAllProprierties>( {} as IVectorAllProprierties);

export const AllHomeHeaderContextsProvider = ( {children}:IAllPropriertiesChildrens ):JSX.Element => {
  const [ state, setState ] = React.useState<IAllProprierties>(myProprieties);
  return (
    <ContextAllPropriertiesHeader.Provider value={{state, setState}}>
      {children}
    </ContextAllPropriertiesHeader.Provider>
  )
}

export const useAllPropriertiesHeader = () => {
  const context = React.useContext<IVectorAllProprierties>(ContextAllPropriertiesHeader);
  if(!context){
     
  };
  const {state, setState} = context;
  return {state, setState}
}