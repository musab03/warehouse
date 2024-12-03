import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'parallex': 'url("/bg_banner.jpg")',
        
      },
      fontFamily: {
        'Brico':["Jacques Francois ShadowBricolage Grotesque", "serif"]
      },
    },
  },
  plugins: [ require('taos/plugin')],
} satisfies Config;

