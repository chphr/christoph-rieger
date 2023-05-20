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
      './**/*.{html,markdown,md}',
      './_includes/**/*.{html,markdown,md}',
      './_layouts/**/*.{html,markdown,md}', 
      './blog/*.{html,markdown,md}', 
      './_posts/*.{html,markdown,md}', 
      './*.{html,markdown,md}',
      './_site/**/*.{html,markdown,md}'
    ],
  }
  