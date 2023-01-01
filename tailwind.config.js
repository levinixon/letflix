/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      height: {
        '1': '448px',
      },
      backgroundImage: {
        'letflix': "url('https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
        'opacity': "10",
      },
    },
  },
  plugins: [],
}


