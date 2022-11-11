
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    screens:{
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
      
    },
    extend: {
      colors:{
        brightRed: "#ef476f",
        brightRedTransparent: "#ef476f50",
        brightYellow: '#ffd166',
        brightYellowTransparent: '#ffd16650',
        brightGreen: '#06d6a0',
        brightGreenTransparent: '#06d6a050',
        brightBlue: '#118ab2',
        brightBlueTransparent: '#118ab250',
        deepBlue: '#073b4c',
        deepBlueTransparent: '#073b4c80',
      },
      fontFamily:{
        lato:["Lato","san-serif"]
      }

    },
  },
  plugins: [],
}
