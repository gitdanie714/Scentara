/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkred: '#66021f',
        pink: '#FFE9EC',
        accent: '#F5A623',
        background: '#F8F8F8',

        text: '#333333',
        muted: '#7F8C8D',
        border: '#E0E0E0',
        error: '#E74C3C',
        success: '#2ECC71',
        warning: '#F39C12',
        info: '#3498DB',
    },
  },
  plugins: [],
}

}