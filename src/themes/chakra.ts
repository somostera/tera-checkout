import { extendTheme } from "@chakra-ui/react";

export const TeraDesignSystem = extendTheme({
  fonts: {
    body: 'Rubik, sans-serif',
    serif: 'Georgia, serif',
  },
  colors: {
    base: {
      black: '#000000',
      white: '#ffffff',
    },
    btn: {
      black: {
        500: "#000000"
      }
    }
  },
  fontSizes: {
    xs: "12px ",  
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "32px",
    "5xl": "48px",
    "6xl": "56px",
    "7xl": "64px",
    "8xl": "96px",
    "9xl": "128px",
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": "12px",
    "4": "16px",
    "5": "20px",
    "6": "24px",
    "7": "28px",
    "8": "32px",
    "9": "36px",
    "10": "40px",
  },
  letterSpacings: {
    tight: "-0.02em",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '0px'
      }
    },
  }
});
