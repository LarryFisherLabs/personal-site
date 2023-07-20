/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': ['.625rem', '.75rem']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      },
      maxHeight: {
        'closed': '0rem',
        'near-closed': '1rem',
        'sec0': '20rem',
        'small-sec0': '27rem',
        'sec1': '30rem',
        'small-sec1': '40rem',
        'sec2': '40rem',
        'small-sec2': '54rem',
        'sec3': '50rem',
        'small-sec3': '67rem',
        'sec4': '60rem',
        'small-sec4': '80rem',
        'sec5': '80rem',
        'small-sec5': '107rem',
        'sec6': '100rem',
        'small-sec6': '134rem',
        'sec7': '120rem',
        'small-sec7': '160rem',
        'sec8': '140rem',
        'small-sec8': '187rem',
        'sec9': '160rem',
        'small-sec9': '214rem',
        'sec10': '180rem',
        'small-sec10': '240rem',
        'sec11': '200rem',
        'small-sec11': '267rem'
      }
    },
  },
  plugins: [],
}
