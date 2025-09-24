import type { Config } from "tailwindcss";
import tokenExtend from "./tailwind.tokens.cjs";
import animate from "tailwindcss-animate";

const shadcnExtend = {
  colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
    primary: { DEFAULT: "var(--primary)", foreground: "var(--primary-foreground)" },
    secondary: { DEFAULT: "var(--secondary)", foreground: "var(--secondary-foreground)" },
    muted: { DEFAULT: "var(--muted)", foreground: "var(--muted-foreground)" },
    accent: { DEFAULT: "var(--accent)", foreground: "var(--accent-foreground)" },
    destructive: { DEFAULT: "var(--destructive)", foreground: "var(--destructive-foreground)" },
    card: { DEFAULT: "var(--card)", foreground: "var(--card-foreground)" },
    popover: { DEFAULT: "var(--popover)", foreground: "var(--popover-foreground)" },
    border: "var(--rpl-color-outline)",
    input: "var(--input)",
    ring: "var(--ring)",
  },
  borderRadius: {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)",
  },
};
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      ...(tokenExtend?.theme?.extend ?? {}),
      ...shadcnExtend
    }
  },
  plugins: [animate]
} satisfies Config;
