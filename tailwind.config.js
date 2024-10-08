/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{ Monsfont:['Montserrat','sans serif']},
      boxShadow:{
        customorange:'0 0px 15px 0px rgb(249, 115, 22)'
      },
      colors:{
        whiteopacity: "rgba(217,217,217,.2)" 
      },    
      rotate: {
        '-25' : '-25deg',
      },
      blur:{
       '3000':"3000px",
      }
    },
  },
  plugins: [],
}

