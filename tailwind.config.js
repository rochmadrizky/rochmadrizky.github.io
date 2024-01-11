/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        deskripsi : "DM Sans, sans-serif",
        judul : "Poppins, sans-serif",
        logo : "Inter, sans-serif",
       },
    },
  },
  plugins: [],
}

