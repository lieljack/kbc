module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "kbc-blue": "#0070C0",
        "kbc-red": "#FF0000",
        "kbc-green": "#00CC00",
        "kbc-yellow": "#FFFF00",
        "special-gray": "#EFF2F1",
        "special-black": "#0F1221"
      },
      backgroundImage: theme => ({
        'subsidiaries': "url('../img/subsidiaries.jpg')",
        'about': "url('../img/pawel-czerwinski-YWIOwHvRBvU-unsplash.jpg')",
        'about-hero': "url('../img/about.jpg')",
        'hero': "url('../img/hero.jpg')",
        'subsidiary-hero': "url('../img/subsidiary.jpg')",
        'contact-hero': "url('../img/contact.jpg')"
       }),
       spacing: {
        '130': '30rem',
        '148': '48rem',
        '196': '96rem',
        // '196': '9rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
