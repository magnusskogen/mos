module.exports = {
  content: ["./src/**/*.{html,js}", "./templates/**/*.twig"],
  theme: {
    fontSize: {
      sm: ['16px', '24px'],
      md: ['20px', '28px'],
      lg: ['28px', '36px'],
    },
    extend: {     
      colors: {
        'light-beige': '#FCFCFA',
        'medium-beige': '#F2F1ED',
        'dark-beige': '#D6D2C4',
        'black': '#000',
        'peach': '#F0D4B6',
        'blue': '#D4E6EB',
        'lavender': '#AAAAE9',
        'pink': '#F3CECE',
        'orange': '#F5764E',
        'yellow': '#FFC658',
        'maroon': '#3F1122',
        'green': '#0C3314'
      } 
    }
  },
  safelist: [
   'pt-lg',
   'pb-lg',
   'pt-0',
   'pb-0'
  ],
}