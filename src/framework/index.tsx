import React from "react";

/*
type myProps = { props: props }

interface props {
props: any;
state: any;
ss: any;
};

export class MyComponent<myProps> {
  render(): JSX.Element {
    return (
      <div></div>
    )
  }
};
*/

export const MyComponent = React.Component;

// Exemple of use
interface props {
  props: any;
  state: any;
  ss: any;
};

interface state {
  props: any;
  state: any;
  ss: any;
};

interface ss {
  props: any;
  state: any;
  ss: any;
};

// MyComponents = React.Component
export class ComponentExemple extends MyComponent<props, state, ss> {
    render(): JSX.Element {
      return (
        <div></div>
      )
    }
  };
