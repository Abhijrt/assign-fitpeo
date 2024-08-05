/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    colors: {
      'dark-grey': '#202028',
      'light-grey': '#434449',
      black: '#141416',
      white: '#ffffff',
      green: '#04BC86',
      red: '#E55552',
      grey: '#828388',
      'light-green': '#155145',
      'light-blue': '#7294FF',
      purple: '#283368',
      'light-red': '#5D3337',
      'light-black': '#2A2B30',
      basket: '#293369',
      bag: '#165246',
      cancel: '#5F3237',
      amount: '#5B2A4A',
      goal: '#5F3237',
      dishes: '#293368',
      menus: '#214A60',
    },
    fontSize: {
      8: '8px',
    },
    borderWidth: {
      12: '12px',
    },
    extend: {},
  },
  plugins: [],
};
