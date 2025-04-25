import { createContext, useContext } from "react"
import type { ConfigurationProps } from "./types";
import { light } from "../styles";

const Arrangement = createContext<Required<Omit<ConfigurationProps, 'children'>>>({
  scheme: {
    components: light?.components,
  },
});

export default function Configuration(
  props: ConfigurationProps
) {

  const {
    children,
    ...rest
  } = props;

  const value: Omit<ConfigurationProps, 'children'> = {
    scheme: {
      components: {
        ...light?.['components'],
        ...rest,
      }
    },
    ...rest,
  }

  return (
    <Arrangement.Provider value={value}>
      {children}
    </Arrangement.Provider>
  )
}

type State = Readonly<Omit<ConfigurationProps, "children">>;
type Fn<F extends Fn<F>> = (configuration: State) => ReturnType<F>;
type FnValue<F extends Fn<F>> = F extends (configuration: State) => ReturnType<F> ?
ReturnType<F> : State;

export function useConfiguration<F extends Fn<F>>(fn?: F): FnValue<F> {
  const configuration = useContext(Arrangement);
  if (fn === void 0) return configuration;
  if (typeof fn === 'function') {
    return fn(configuration);
  }
  return configuration;
}