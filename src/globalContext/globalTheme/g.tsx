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

export const ContextAllProprierties = React.createContext<IVectorAllProprierties>( {} as IVectorAllProprierties);

export const AllPropriertiesProvider = ( {children}:IAllPropriertiesChildrens ):JSX.Element => {
  const [ state, setState ] = React.useState<IAllProprierties>(myProprieties);
  return (
    <ContextAllProprierties.Provider value={{state, setState}}>
      {children}
    </ContextAllProprierties.Provider>
  )
}

export const useAllProprierties = () => {
  const context = React.useContext<IVectorAllProprierties>(ContextAllProprierties);
  if(!context){
     
  };
  const {state, setState} = context;
  return {state, setState}
}