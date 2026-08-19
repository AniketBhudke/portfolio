module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#020817',
        bg2: '#071225',
        accent: '#00D9FF',
        accent2: '#2563EB',
        muted: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};