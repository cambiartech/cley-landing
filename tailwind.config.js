/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',  // Catch-all for any files in src
    ],
    theme: {
      extend: {
        colors: {
            cleyfi: {
            blue: 'var(--cleyfi-blue)',
            yellow: 'var(--cleyfi-yellow)',
            lightBg: 'var(--cleyfi-lightBg)',
            white: 'var(--cleyfi-white)',
            brown: 'var(--cleyfi-brown)',
            deepPurple: 'var(--cleyfi-deepPurple)',
            black: 'var(--cleyfi-black)',
          },
          custom: {
            blue: 'var(--cleyfi-blue)',
            yellow: 'var(--cleyfi-yellow)',
            lightBg: 'var(--cleyfi-lightBg)',
            white: 'var(--cleyfi-white)',
            brown: 'var(--cleyfi-brown)',
            deepPurple: 'var(--cleyfi-deepPurple)',
            black: 'var(--cleyfi-black)',
          },
        },
        fontFamily: {
          archivo: ["Archivo", "sans-serif"],
          quicksand: ["Quicksand", "sans-serif"],
        },
      },
    },
    
    plugins: [],
  };