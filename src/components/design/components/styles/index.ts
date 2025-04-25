import type { ConfigurationProps } from "../configuration/types";
import { NAVY_BLUE, GREEN, GRAY, RED, GOLD } from '../styles/color'
const gloabl = {
  round: 6,
  button: {
    
  }
}

type Color = Omit<ConfigurationProps, 'children'>

export const light = {
  components: {
    button: {
      round: 6,
      color: {
        primary: NAVY_BLUE.four,
        success: GREEN.four,
        default: GRAY.ten,
        danger: RED.four,
        warning: GOLD.five,
      }
    }
  }
};

export const dark = {
  button: {
    round: gloabl.round,
  }
}