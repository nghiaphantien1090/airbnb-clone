/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      'xs':'550px',
      'sm':'744px',
      'md':'950px',
      'lg':'1128px',
      'xl':'1440px'
    },
    extend: {
      flexGrow: {
        2: '2'
      }
      
    },
  },
  plugins: [],
}
