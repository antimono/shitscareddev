export default {
  breakpoints: ["45em", "56em", "64em"],
  colors: {
    text: "#333",
    secondaryText: "#8a8a8a",
    background: "#fff",
    secondaryBackground: "rgb(242, 242, 242)",
    secondaryBackgroundHover: "rgb(226, 226, 226)",
    primary: "#0369E2",
    primaryHover: "#0050b0",
    secondary: "#ff6347",
    border: "rgb(210, 210, 210)"
  },
  radii: [8, 24, 32],
  fonts: {
    body: "Inter",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body"
    }
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      pt: 3,
      pb: 3,
      borderRadius: 0,
      "&:hover": {
        bg: "primaryHover",
        cursor: "pointer"
      }
    },
    secondary: {
      color: "text",
      bg: "background",
      pt: 3,
      pb: 3,
      borderRadius: 0,
      "&:hover": {
        bg: "secondaryBackground",
        cursor: "pointer"
      }
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold"
    },
    input: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none"
      }
    },
    select: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none"
      }
    },
    textarea: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none"
      }
    },
    slider: {
      bg: "muted"
    }
  }
}
