import { createGodown } from 'ask-godown';

type Godown = {
  theme: 'light' | 'dark';
}

const useGodown = createGodown<Godown>((set) => {
  return {
    theme: 'light',
  }
});

export default useGodown;