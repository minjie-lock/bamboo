import { createGodown } from 'ask-godown';
import dark from "src/styles/dark";
import light from "src/styles/light";

const color = {
  light,
  dark,
}

type Scheme = {
  color: COLOR;
  theme: 'light' | 'dark';
}

const useScheme = createGodown<Scheme>((set, get) => {
  const theme = get?.().theme ?? 'light';
  return {
    color: color[theme],
    theme: 'light',
    setTheme: (theme: Scheme['theme']) => {
      set({
        theme,
      })
    }
  }
});

export default useScheme;