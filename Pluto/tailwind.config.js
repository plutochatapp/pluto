/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
        colors: {
            'navbar-color': '#161616',
            'navbar-btn-color': '#252525',
            'btn-color': '#00E794',
            'modal-backdrop-color': 'rgba(0, 0, 0, 0.5)',
        },
    },
    fontFamily: {
        'ubuntu': ['Ubuntu', 'san-serif'],
        'inter-bold': ['Inter Tight', 'sans-serif'],
    }
  },
  plugins: [],
}