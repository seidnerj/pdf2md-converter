// tailwind.config.ts (Corrected filename)
import type { Config } from "tailwindcss";

const config: Config = {
  // content: [ // Try removing this array for v4 automatic detection
  //   // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Path likely not needed if using App Router
  //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#3b82f6',
        secondary: '#6b7280',
        accent: '#10b981',
      }
    },
  },
  plugins: [], // If you add plugins like @tailwindcss/forms, use @plugin in globals.css
};
export default config;