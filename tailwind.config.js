/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        ivory: '#FAF8F3',
        cream: '#F4EFE6',
        ink: '#1C1C1C',
        'ink-muted': '#6F6A62',
        'ink-light': '#9A948B',
        gold: '#C9AA6A',
        'gold-dark': '#B8965A',
        border: '#E8E2D8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
      maxWidth: {
        editorial: '1200px',
        prose: '600px',
      },
      letterSpacing: {
        'nav': '0.2em',
        'eyebrow': '0.18em',
        'wide-lg': '0.3em',
      },
      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
};
