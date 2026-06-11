/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          primary:   '#1a6a85',  // dark teal — nav, hero, dark sections
          secondary: '#2f9dc0',  // logo teal — accents, links, highlights
          light:     '#87cbe8',  // light blue — subtle accents
          surface:   '#f0f8fc',  // very light blue tint — page background
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
      },
    },
  },
  plugins: [],
};
