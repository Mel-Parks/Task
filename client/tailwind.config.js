 {import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        urgent: "#dc2626",      // Rouge - en retard
        attention: "#f59e0b",   // Orange - 1 à 3 jours
        normal: "#10b981",      // Vert - > 3 jours
      },
    },
  },
  plugins: [],
};