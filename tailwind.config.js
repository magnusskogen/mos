module.exports = {
  content: ["./src/**/*.{html,js}", "./templates/**/*.twig", "./web/**.html"],
  theme: {
    extend: {     
      colors: {
        'blue': '#D4E6EB',
        'orange': '#F5764E',
        'beige': '#F0D4B6',
        'purple': '#AAAAE9'
      } 
    }
  },
  safelist: [
    'bg-blue',
    'bg-orange',
    'bg-beige',
    'bg-purple'
  ],
}