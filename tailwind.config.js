module.exports = {
    plugins: [
      require('@tailwindcss/typography'),
    ],
    theme: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    content: [
      './**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html', 
      './blog/*.html', 
      './_posts/*.html', 
      './*.html'
    ],
  }
  