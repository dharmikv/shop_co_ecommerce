/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  ['./pages/*.html',
  './assets/**/*.js'],
  theme: {
    fontFamily: {
      Satoshi: ["Satoshi"],
      Integral: ["Integral"],
    },
    colors:{
      transparent:"transparent",
      Black:{
        100:"#000000",
        60:"#00000099",
        40:"#00000066",
        20:"#00000033",
        10:"#0000001A"
      },
      Red:"#ff3333",
      lightRed:"#ff33331A",
      White:"#ffffff",
      DarkGrey:"#F2F0F1",
      LightGrey:"#F0F0F0",
      SemiGrey:"#F0EEED",
    },
    fontSize: {
      12: '12px',
      14: '14px',
      16: '16px',
      20: '20px',
      24: '24px',
      25:"25px",
      26:"26px",
      28:"28px",
      30:"30px",
      32: '32px',
      36: '36px',
      38:"38px",
      40: '40px',
      48: '48px',
      56: '56px',
      64: '64px',
    },
    fontWeight: {
      400: '400',
      500: '500',
      700: '700',
    },
    lineHeight:{
      content:"22px",
      16:"16px",
      18:"18px",
      19:"19px",
      27:"27px",
      30:"30px",
      32:"32px",
      34:"34px",
      36:"36px",
      38:"38px",
      40:"40px",
      45:"45px",
      48:"48px",
      54:"54px",
      58:"58px",
      64:"64px"
    },
    borderRadius: {
      none: '0',
      5:"5px",
      10:"10px",
      20: '20px',
      40: '40px',
      62:"62px"
    },
    borderWidth: {
      1: '1px',
      2: '2px',
      0: '0px',            
    },
    borderWidth: {
      1: '1px',
      2: '2px',
      0: '0px',            
    },
    extend: {
      screens:{
        "3xlscreen": { max: "1511px" },
        "2xlscreen": { max: "1440px" },
        xlscreen: { max: "1280px" },
        lgscreen: { max: "1024px" },
        mdscreen: { max: "768px" },
        smscreen: { max: "640px" },
        xsscreen: { max: "426px" },
        "2xsscreen":{max:"375px"},
      },
      filter: {
        sidebar_close: 'brightness(0) saturate(100%) invert(0%) sepia(9%) saturate(7500%) hue-rotate(150deg) brightness(107%) contrast(107%)',
        footer_icons: 'brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(7444%) hue-rotate(298deg) brightness(107%) contrast(106%)',
      },
      borderWidth: {
        1: '1px',
        2: '2px',
        0: '0px',            
      },
      borderWidth: {
        1: '1px',
        2: '2px',
        0: '0px',            
      },
      spacing:{
        "20per":"20%",
        "18per":"18%",
        "15per":"15%",
        "13per":"13%"
      },
      letterSpacing:{
        3:"3px"
      },
      width:{
        "22px":"22px"
      },
      height:{
        "1px":"1px",
        "22px":"22px",
        85:"85%",
        90:"90%"
      },
      translate: {
        0: '0px',
        'minus_50': '-50%',
      },
      padding: {
        10:"10px",
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        36: '36px',
        40: '40px',
        56: '56px',
        64:"64px",
        65: '65px',
        67: '67px',
        100: '100px',
        "5rem":"5rem",
        "4rem":"4rem",
        "3rem":"3rem",
        "2rem":"2rem",
        "1rem":"1rem",
      },
      margin:{
        // 14:"14px",
        25:"25px",
        35:"35px",
        52:"52px",
        "5rem":"5rem",
        "4rem":"4rem",
        "3rem":"3rem",
      }
    },
  },
  plugins: [],
}

