/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Center the container by default
        padding: '2rem', // Default padding
        screens: {
          sm: '100%', // 100% width on small screens
          md: '728px', // 728px width on medium screens
          lg: '984px', // 984px width on large screens
          xl: '1240px', // 1240px width on extra large screens
          "2xl": '1620px',
        },
      },
      gridTemplateColumns: {
        'auto-fit-350': 'repeat(auto-fit, minmax(350px, 1fr))',
      },
      colors: {
        primary: "#58A0A3",
        secondary: "#FFFFFF",
        accent: "#325058",
        neutral: "#1E1E1E",
        base100: "#F4F4F4",
        base200: "#F2F5F9",
        base300: "#718096",
        base400: "#B0B5BB",
        success: "#41b15a",
        error: "#E70000",
      }
    },

  },
  plugins: [],
}