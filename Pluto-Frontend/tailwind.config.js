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
            'modal-backdrop-color': 'rgba(0, 0, 0, 0.5)',
        },
    },
  },
  plugins: [],
}

